import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Meal box detailsComponent } from './meal box details.component';

describe('Meal box detailsComponent', () => {
  let component: Meal box detailsComponent;
  let fixture: ComponentFixture<Meal box detailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Meal box detailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Meal box detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});