import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Structuraldirectives1Component } from './structuraldirectives1.component';

describe('Structuraldirectives1Component', () => {
  let component: Structuraldirectives1Component;
  let fixture: ComponentFixture<Structuraldirectives1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Structuraldirectives1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Structuraldirectives1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
