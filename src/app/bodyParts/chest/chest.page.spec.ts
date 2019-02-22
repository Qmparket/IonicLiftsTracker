import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestPage } from './chest.page';

describe('ChestPage', () => {
  let component: ChestPage;
  let fixture: ComponentFixture<ChestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
