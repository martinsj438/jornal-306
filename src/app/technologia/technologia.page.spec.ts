import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiaPage } from './technologia.page';

describe('TechnologiaPage', () => {
  let component: TechnologiaPage;
  let fixture: ComponentFixture<TechnologiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
