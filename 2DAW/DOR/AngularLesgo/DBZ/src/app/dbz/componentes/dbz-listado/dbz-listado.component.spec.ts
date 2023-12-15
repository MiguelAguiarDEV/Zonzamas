import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzListadoComponent } from './dbz-listado.component';

describe('DbzListadoComponent', () => {
  let component: DbzListadoComponent;
  let fixture: ComponentFixture<DbzListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbzListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbzListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
