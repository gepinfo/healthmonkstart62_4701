import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Selected food view breakfastComponent } from './selected food view breakfast.component';

describe('Selected food view breakfastComponent', () => {
  let component: Selected food view breakfastComponent;
  let fixture: ComponentFixture<Selected food view breakfastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Selected food view breakfastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Selected food view breakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});