import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EsquipeListComponent } from './equipe-list.component';

describe('EsquipeListComponent', () => {
  let component: EsquipeListComponent;
  let fixture: ComponentFixture<EsquipeListComponent>;
  const idTest: string = 'team-id-test';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ EsquipeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsquipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to store an Id of team', () => {
    fixture = TestBed.createComponent(EsquipeListComponent);
    component = fixture.componentInstance;
    component.selecionarEquipe(idTest);
    expect(component.equipesSelecionadas).toContain(idTest);
  })

  it('should be not inclued duplicate teams', () => {
    fixture = TestBed.createComponent(EsquipeListComponent);
    component = fixture.componentInstance;
    component.selecionarEquipe(idTest);
    component.selecionarEquipe(idTest);
    
    expect(component.equipesSelecionadas.length).toBe(0);
  });

  it('should be try submit the teams for the cup', () => {
    fixture = TestBed.createComponent(EsquipeListComponent);
    component = fixture.componentInstance;
    component.gerarCopa();
    expect(component.operacaoValida()).toBe(false);
  });
});
