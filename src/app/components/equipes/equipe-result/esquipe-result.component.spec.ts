import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeResultComponent } from './equipe-result.component';

describe('EsquipeResultComponent', () => {
  let component: EquipeResultComponent;
  let fixture: ComponentFixture<EquipeResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
});
