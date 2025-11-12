const mockPeptides = [
  {
    sequence: 'ACDEFGHIK',
    stability: 0.92,
  },
  {
    sequence: 'LMNPQRSTV',
    stability: 0.88,
  },
  {
    sequence: 'WYACDEFGH',
    stability: 0.85,
  },
];

export const generatePeptides = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPeptides);
    }, 2000); // 2-second delay to simulate API call
  });
};
