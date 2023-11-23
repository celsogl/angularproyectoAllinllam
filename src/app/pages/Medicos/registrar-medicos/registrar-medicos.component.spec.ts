import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMedicosComponent } from './registrar-medicos.component';

describe('RegistrarMedicosComponent', () => {
  let component: RegistrarMedicosComponent;
  let fixture: ComponentFixture<RegistrarMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarMedicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
