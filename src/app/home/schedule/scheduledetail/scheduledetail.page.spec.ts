import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScheduledetailPage } from './scheduledetail.page';

describe('ScheduledetailPage', () => {
  let component: ScheduledetailPage;
  let fixture: ComponentFixture<ScheduledetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
