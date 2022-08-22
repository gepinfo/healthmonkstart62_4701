import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nutration insights breakfast screenComponent } from './nutration insights breakfast screen.component';

describe('Nutration insights breakfast screenComponent', () => {
  let component: Nutration insights breakfast screenComponent;
  let fixture: ComponentFixture<Nutration insights breakfast screenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nutration insights breakfast screenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nutration insights breakfast screenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});