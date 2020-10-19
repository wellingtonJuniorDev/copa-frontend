import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EquipeResultadoModel } from '../models/equipe-resultado-model';
import { EquipesService } from './equipes.service';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import { EquipeModel } from '../models/equipe-model';
import { environment } from 'src/environments/environment';

describe('EsquipesService', () => {
  let service: EquipesService;
  let httpMock: HttpTestingController;
  const dummyTeams: EquipeResultadoModel[] = [
    { id: '1', nome: 'Equipe 1', vencedora: true},
    { id: '2', nome: 'Equipe 2', vencedora: false}
  ];
  const postTeams: string[] = ['1','2'];
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [EquipesService]
    }).compileComponents();

    service = TestBed.inject(EquipesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to store teams list in memory', () => {
    service.armazenarResultado(dummyTeams);
    const result = service.obterResultado();
    expect(result.length).toBe(2);
    expect(result).toEqual(dummyTeams);
  });

  it('should be able to clear list in memory', () => {
    service.armazenarResultado(dummyTeams);
    let result = service.obterResultado();
    expect(result.length).toBe(2);
  });

  it('be able to post teams from the API via POST', () => {
    service.gerarCopa(postTeams).subscribe(teams => {
        expect(teams.length).toBe(2);
        expect(teams).toEqual(dummyTeams);
    });
    const request = httpMock.expectOne(environment.copaApi('partidas/copa'));
    expect(request.request.method).toBe('POST');
      request.flush(dummyTeams);
    });

    afterEach(() => {
      httpMock.verify();
  });
});
