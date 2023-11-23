import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarFichaTerapeuticaComponent } from './registrar-ficha-terapeutica.component';

describe('RegistrarFichaTerapeuticaComponent', () => {
  let component: RegistrarFichaTerapeuticaComponent;
  let fixture: ComponentFixture<RegistrarFichaTerapeuticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarFichaTerapeuticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarFichaTerapeuticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
