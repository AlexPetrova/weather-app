import { DateFormatPipe } from './date-format.pipe';
import { MomentService } from '../service/moment.service';

describe('DateFormatPipe', () => {
  it('returns date in the passed string format', () => {
    const momentService = new MomentService();
    spyOn(momentService, 'format').and.returnValue('01/2/2020');
    const pipe = new DateFormatPipe(momentService);

    let date = pipe.transform(1580515200, 'DD/M/YYYY');

    expect(date).toBe('01/2/2020');
  });
});
