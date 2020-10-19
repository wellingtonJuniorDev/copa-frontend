import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EquipeResultadoModel } from '../../models/equipe-resultado-model';

import { EquipeResultComponent } from './equipe-result.component';

describe('EsquipeResultComponent', () => {
  let component: EquipeResultComponent;
  let fixture: ComponentFixture<EquipeResultComponent>;
  const dummyTeams: EquipeResultadoModel[] = [
    { id: '1', nome: 'Equipe 1', vencedora: true},
    { id: '2', nome: 'Equipe 2', vencedora: false}
  ];
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ EquipeResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false in the copaFoiGerada', () => {
    fixture = TestBed.createComponent(EquipeResultComponent);
    const result = fixture.componentInstance.copaFoiGerada();
    expect(result).toBe(false);
  })

  it('should return true in the copaFoiGerada', () => {
    fixture = TestBed.createComponent(EquipeResultComponent);
    const service = fixture.componentInstance.equipeService;
    service.armazenarResultado(dummyTeams);
    
    const result = fixture.componentInstance.copaFoiGerada();
    expect(result).toBe(true);
  });

});
