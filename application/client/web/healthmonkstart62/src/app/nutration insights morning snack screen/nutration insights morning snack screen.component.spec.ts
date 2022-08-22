import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nutration insights morning snack screenComponent } from './nutration insights morning snack screen.component';

describe('Nutration insights morning snack screenComponent', () => {
  let component: Nutration insights morning snack screenComponent;
  let fixture: ComponentFixture<Nutration insights morning snack screenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nutration insights morning snack screenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nutration insights morning snack screenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});