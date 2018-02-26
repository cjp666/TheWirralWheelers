import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideSafetyComponent } from './ride-safety.component';

describe('RideSafetyComponent', () => {
  let component: RideSafetyComponent;
  let fixture: ComponentFixture<RideSafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideSafetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
