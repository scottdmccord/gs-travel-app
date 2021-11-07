import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PinMapComponent } from './pin-map.component';

describe('PinMapComponent', () => {
  let component: PinMapComponent;
  let fixture: ComponentFixture<PinMapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PinMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
