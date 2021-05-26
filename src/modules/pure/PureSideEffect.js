import React, { useState } from 'react';

const PureSideEffect = () => {
    const ogArray = [10, 1, 7, 4];

    const [numberArray, setNumberArray] = useState(ogArray);

    // Impure
    const sortNumberArray = () => {
        console.log("%cCalling impure sorting function", "color:red;")
        const numberArrayCopy = JSON.parse(JSON.stringify(numberArray)); // Violation: External Dependency
        const sortedNumberArray = numberArrayCopy?.sort((number1, number2) => number1 - number2);
        setNumberArray(sortedNumberArray); // Violation: Side Effect
    }

    // Pure
    const sortNumberArrayPure = (array) => {
        console.log("%cCalling pure sorting function", "color:green;")
        const sortedNumberArray = sortAnyArray(array);
        setNumberArray(sortedNumberArray);
    }

    // Generic Function that can be reused
    const sortAnyArray = (inputArray) => {
        const inputArrayCopy = JSON.parse(JSON.stringify(inputArray));
        const sortedInputArray = inputArrayCopy?.sort((number1, number2) => number1 - number2);
        return sortedInputArray;
    }

    const resetArray = () => {
        console.log("%cResetting Array", "color:blue;")
        setNumberArray(ogArray);
    }

    return (
      <>
        <h3>Pure Functions: Side Effects Example</h3>
        <div>{numberArray?.join(", ")}</div>
        <div>
          <button onClick={sortNumberArray}>Sort Impure</button>


          <button onClick={() => sortNumberArrayPure(numberArray)}>Sort Pure</button>
          <button onClick={resetArray}>Reset</button>
        </div>
      </>
    );
};

export default PureSideEffect;