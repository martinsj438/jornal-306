import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioPage } from './negocio.page';

describe('NegocioPage', () => {
  let component: NegocioPage;
  let fixture: ComponentFixture<NegocioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegocioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
