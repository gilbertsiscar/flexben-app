const CalculateFlexpoint = ({}) => {
  let tax = 0;
  const rate = 21.75; // idk what this is
  return {
    getTax: () => `${tax * 100}%`,
    setTax: (value) => (tax = parseFloat(value)),

    calculate: (salary, flexCredit) => {
      if (!salary || !flexCredit) {
        throw new Error('Missing parameters');
      }
      const salaryWithTax = salary * (1 - tax);
      return (salaryWithTax / rate) * flexCredit;
    },
  };
};

module.exports = CalculateFlexpoint;
