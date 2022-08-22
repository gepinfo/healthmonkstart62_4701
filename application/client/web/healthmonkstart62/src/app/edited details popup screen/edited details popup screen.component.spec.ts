import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edited details popup screenComponent } from './edited details popup screen.component';

describe('Edited details popup screenComponent', () => {
  let component: Edited details popup screenComponent;
  let fixture: ComponentFixture<Edited details popup screenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Edited details popup screenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Edited details popup screenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});