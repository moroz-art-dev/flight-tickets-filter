import {getTransfersLabel} from '../inflections';

describe('getTransfersLabel', () => {
  it('returns correct label for 0 transfers', () => {
    expect(getTransfersLabel(0)).toBe('Без пересадок');
  });

  it('returns correct label for 1 transfer', () => {
    expect(getTransfersLabel(1)).toBe('1 пересадка');
  });

  it('returns correct label for 2-4 transfers', () => {
    expect(getTransfersLabel(2)).toBe('2 пересадки');
    expect(getTransfersLabel(3)).toBe('3 пересадки');
    expect(getTransfersLabel(4)).toBe('4 пересадки');
  });

  it('returns correct label for 5 or more transfers', () => {
    expect(getTransfersLabel(5)).toBe('5 пересадок');
    expect(getTransfersLabel(10)).toBe('10 пересадок');
    expect(getTransfersLabel(21)).toBe('21 пересадок');
  });
});
