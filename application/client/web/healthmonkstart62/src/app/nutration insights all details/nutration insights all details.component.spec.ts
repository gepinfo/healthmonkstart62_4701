import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nutration insights all detailsComponent } from './nutration insights all details.component';

describe('Nutration insights all detailsComponent', () => {
  let component: Nutration insights all detailsComponent;
  let fixture: ComponentFixture<Nutration insights all detailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nutration insights all detailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nutration insights all detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});