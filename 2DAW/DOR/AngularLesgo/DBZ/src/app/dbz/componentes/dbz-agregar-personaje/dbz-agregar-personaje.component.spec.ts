import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzAgregarPersonajeComponent } from './dbz-agregar-personaje.component';

describe('DbzAgregarPersonajeComponent', () => {
  let component: DbzAgregarPersonajeComponent;
  let fixture: ComponentFixture<DbzAgregarPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbzAgregarPersonajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbzAgregarPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
