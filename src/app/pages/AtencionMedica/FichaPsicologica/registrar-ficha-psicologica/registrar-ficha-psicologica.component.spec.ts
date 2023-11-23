import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarFichaPsicologicaComponent } from './registrar-ficha-psicologica.component';

describe('RegistrarFichaPsicologicaComponent', () => {
  let component: RegistrarFichaPsicologicaComponent;
  let fixture: ComponentFixture<RegistrarFichaPsicologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarFichaPsicologicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarFichaPsicologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
