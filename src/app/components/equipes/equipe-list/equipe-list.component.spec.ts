import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsquipeListComponent } from './equipe-list.component';

describe('EsquipeListComponent', () => {
  let component: EsquipeListComponent;
  let fixture: ComponentFixture<EsquipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
});
