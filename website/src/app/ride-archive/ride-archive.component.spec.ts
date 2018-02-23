import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideArchiveComponent } from './ride-archive.component';

describe('RideArchiveComponent', () => {
  let component: RideArchiveComponent;
  let fixture: ComponentFixture<RideArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
