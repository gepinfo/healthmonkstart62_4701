import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Save meal popup screenComponent } from './save meal popup screen.component';

describe('Save meal popup screenComponent', () => {
  let component: Save meal popup screenComponent;
  let fixture: ComponentFixture<Save meal popup screenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Save meal popup screenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Save meal popup screenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});