import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFichaTerapeuticaComponent } from './listar-ficha-terapeutica.component';

describe('ListarFichaTerapeuticaComponent', () => {
  let component: ListarFichaTerapeuticaComponent;
  let fixture: ComponentFixture<ListarFichaTerapeuticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarFichaTerapeuticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarFichaTerapeuticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
