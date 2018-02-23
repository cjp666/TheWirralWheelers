import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposedRidesComponent } from './proposed-rides.component';

describe('ProposedRidesComponent', () => {
  let component: ProposedRidesComponent;
  let fixture: ComponentFixture<ProposedRidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposedRidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposedRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
