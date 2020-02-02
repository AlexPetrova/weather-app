import { TestBed } from '@angular/core/testing';

import { WeekdayService } from './weekday.service';

describe('WeekdayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeekdayService = TestBed.get(WeekdayService);
    expect(service).toBeTruthy();
  });
});
