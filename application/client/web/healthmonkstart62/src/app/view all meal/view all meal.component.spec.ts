import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { View all mealComponent } from './view all meal.component';

describe('View all mealComponent', () => {
  let component: View all mealComponent;
  let fixture: ComponentFixture<View all mealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View all mealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View all mealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});