import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundComponent } from './notfound.component';

describe('NotfoundComponent', () => {
  let component: NotfoundComponent;
  let fixture: ComponentFixture<NotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text voltar para a pagina principal', () => {
    const fixture = TestBed.createComponent(NotfoundComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div a').textContent).toContain('Voltar para a página principal');
  });
});
