import { RoundPipe } from './round.pipe';

describe('RoundPipe', () => {
  it('returns the passed number rounded', () => {
    const pipe = new RoundPipe();

    let roundedNum = pipe.transform(1.7);

    expect(roundedNum).toBe(2);

    roundedNum = pipe.transform(1.001);

    expect(roundedNum).toBe(1);

    roundedNum = pipe.transform(1.4);

    expect(roundedNum).toBe(1);
  });
});
