import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Select food detailsComponent } from './select food details.component';

describe('Select food detailsComponent', () => {
  let component: Select food detailsComponent;
  let fixture: ComponentFixture<Select food detailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Select food detailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Select food detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});