import { TestBed } from '@angular/core/testing';

import { WeekdayService } from './weekday.service';
import { MomentService } from './moment.service';
import { Weekdays } from '../../types';

describe('WeekdayService', () => {
  it('should return the current day name of the week', () => {
    const momentService = new MomentService();
    spyOn(momentService, 'isoWeek').and.returnValue(1);
    const service = new WeekdayService(momentService);

    const currentDay = service.getCurrentDayName();

    expect(currentDay).toBe(Weekdays[1])
  });

  it('should return the current day name from time stamp', () => {
    const momentService = new MomentService();
    spyOn(momentService, 'isoWeekday').and.returnValue(1);
    const service = new WeekdayService(momentService);

    const day = service.getDayName(1580515200);
    expect(day).toBe(Weekdays[1])
  });
});
