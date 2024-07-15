export const getTransfersLabel = (n: number): string => {
  if (n === 0) {
    return 'Без пересадок';
  } else if (n === 1) {
    return `${n} пересадка`;
  } else if (n > 1 && n < 5) {
    return `${n} пересадки`;
  } else {
    return `${n} пересадок`;
  }
};
