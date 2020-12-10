const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumSignificantDigits: 3,
  });
  
  export const format = (val) => formatter.format(val); 