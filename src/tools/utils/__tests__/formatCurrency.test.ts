import {formatCurrency} from '../formatCurrency';

describe('formatCurrency', () => {
  it('formats USD correctly', () => {
    expect(formatCurrency(1000, 'USD')).toBe('1 000 $');
    expect(formatCurrency(1000000, 'USD')).toBe('1 000 000 $');
    expect(formatCurrency(1234.56, 'USD')).toBe('1 235 $');
  });

  it('formats EUR correctly', () => {
    expect(formatCurrency(1000, 'EUR')).toBe('1 000 €');
    expect(formatCurrency(1000000, 'EUR')).toBe('1 000 000 €');
    expect(formatCurrency(1234.56, 'EUR')).toBe('1 235 €');
  });

  it('formats GBP correctly', () => {
    expect(formatCurrency(1000, 'GBP')).toBe('1 000 £');
    expect(formatCurrency(1000000, 'GBP')).toBe('1 000 000 £');
    expect(formatCurrency(1234.56, 'GBP')).toBe('1 235 £');
  });

  it('handles unknown currency codes', () => {
    expect(formatCurrency(1000, 'XYZ')).toBe('1 000 XYZ');
  });

  it('rounds to nearest integer', () => {
    expect(formatCurrency(1000.4, 'USD')).toBe('1 000 $');
    expect(formatCurrency(1000.5, 'USD')).toBe('1 001 $');
  });

  it('handles zero and negative numbers', () => {
    expect(formatCurrency(0, 'USD')).toBe('0 $');
    expect(formatCurrency(-1000, 'USD')).toBe('-1 000 $');
  });
});
