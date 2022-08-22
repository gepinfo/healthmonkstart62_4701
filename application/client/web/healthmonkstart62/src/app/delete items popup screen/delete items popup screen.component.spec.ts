import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Delete items popup screenComponent } from './delete items popup screen.component';

describe('Delete items popup screenComponent', () => {
  let component: Delete items popup screenComponent;
  let fixture: ComponentFixture<Delete items popup screenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Delete items popup screenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Delete items popup screenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});