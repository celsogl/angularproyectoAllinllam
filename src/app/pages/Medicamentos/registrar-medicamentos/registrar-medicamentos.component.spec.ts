import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMedicamentosComponent } from './registrar-medicamentos.component';

describe('RegistrarMedicamentosComponent', () => {
  let component: RegistrarMedicamentosComponent;
  let fixture: ComponentFixture<RegistrarMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarMedicamentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
