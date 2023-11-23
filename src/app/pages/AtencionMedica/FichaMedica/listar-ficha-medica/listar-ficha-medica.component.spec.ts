import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFichaMedicaComponent } from './listar-ficha-medica.component';

describe('ListarFichaMedicaComponent', () => {
  let component: ListarFichaMedicaComponent;
  let fixture: ComponentFixture<ListarFichaMedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarFichaMedicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarFichaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
