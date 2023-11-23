import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTipoSangreComponent } from './registrar-tipo-sangre.component';

describe('RegistrarTipoSangreComponent', () => {
  let component: RegistrarTipoSangreComponent;
  let fixture: ComponentFixture<RegistrarTipoSangreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarTipoSangreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarTipoSangreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
