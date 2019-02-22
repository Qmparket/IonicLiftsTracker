import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentPage } from './main-content.page';

describe('MainContentPage', () => {
  let component: MainContentPage;
  let fixture: ComponentFixture<MainContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
