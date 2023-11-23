import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarFichaMedicaComponent } from './registrar-ficha-medica.component';

describe('RegistrarFichaMedicaComponent', () => {
  let component: RegistrarFichaMedicaComponent;
  let fixture: ComponentFixture<RegistrarFichaMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarFichaMedicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarFichaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
