import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nutration drink detailsComponent } from './nutration drink details.component';

describe('Nutration drink detailsComponent', () => {
  let component: Nutration drink detailsComponent;
  let fixture: ComponentFixture<Nutration drink detailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nutration drink detailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nutration drink detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});