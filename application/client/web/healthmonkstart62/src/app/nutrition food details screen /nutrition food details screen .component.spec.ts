import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nutrition food details screen Component } from './nutrition food details screen .component';

describe('Nutrition food details screen Component', () => {
  let component: Nutrition food details screen Component;
  let fixture: ComponentFixture<Nutrition food details screen Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nutrition food details screen Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nutrition food details screen Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});