import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatvariableComponent } from './templatvariable.component';

describe('TemplatvariableComponent', () => {
  let component: TemplatvariableComponent;
  let fixture: ComponentFixture<TemplatvariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatvariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatvariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
