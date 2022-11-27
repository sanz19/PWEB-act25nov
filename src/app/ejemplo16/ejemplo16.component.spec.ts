import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo16Component } from './ejemplo16.component';

describe('Ejemplo16Component', () => {
  let component: Ejemplo16Component;
  let fixture: ComponentFixture<Ejemplo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplo16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
