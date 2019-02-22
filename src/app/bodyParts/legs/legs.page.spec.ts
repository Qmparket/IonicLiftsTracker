import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegsPage } from './legs.page';

describe('LegsPage', () => {
  let component: LegsPage;
  let fixture: ComponentFixture<LegsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
