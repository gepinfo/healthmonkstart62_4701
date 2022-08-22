import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Successfully screen popup screenComponent } from './successfully screen popup screen.component';

describe('Successfully screen popup screenComponent', () => {
  let component: Successfully screen popup screenComponent;
  let fixture: ComponentFixture<Successfully screen popup screenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Successfully screen popup screenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Successfully screen popup screenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});