import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoSangreComponent } from './listar-tipo-sangre.component';

describe('ListarTipoSangreComponent', () => {
  let component: ListarTipoSangreComponent;
  let fixture: ComponentFixture<ListarTipoSangreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarTipoSangreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarTipoSangreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
