import React, { useEffect } from 'react';

const PureBad = () => {
  useEffect(() => {
    console.log("Example of external dependency:");

    const todayRate = getTodayRate();
    const dollarAmount = 20;

    const conversionToINR1 = USDtoINR1(dollarAmount);
    const conversionToINR2 = USDtoINR2(dollarAmount, todayRate);

    console.log(`Using impure function, $${dollarAmount} in INR is ${conversionToINR1}`);
    console.log(`Using pure function,   $${dollarAmount} in INR is ${conversionToINR2}`);
  }, []);

  // Impure Function
  function USDtoINR1(USD) {
    const todayRate = getTodayRate();
    return USD * todayRate; // todayRate is external dependency
  }

  // Pure Function
  function USDtoINR2(USD, todayRate) {
    return USD * todayRate;
  }

  function getTodayRate() {
    return 75;
  }

  return (
    <div>
      <h3>Pure Functions: external dependency example -{">"}</h3>
    </div>
  );
};

export default PureBad;