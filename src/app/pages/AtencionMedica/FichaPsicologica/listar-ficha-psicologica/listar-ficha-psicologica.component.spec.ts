import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFichaPsicologicaComponent } from './listar-ficha-psicologica.component';

describe('ListarFichaPsicologicaComponent', () => {
  let component: ListarFichaPsicologicaComponent;
  let fixture: ComponentFixture<ListarFichaPsicologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarFichaPsicologicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarFichaPsicologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
