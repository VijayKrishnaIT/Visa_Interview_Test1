import React from "react";
import "./styles.css";
// 2 numbers sum =7 list of n numbers none of the numbers in
//negative. sum it all the numbers. all the combination.

export default function App() {
  const TwoOfSum = (inputArray, sum) => {
    let hashMap = {},
      results = [];

    for (let i = 0; i < inputArray.length; i++) {
      //hasmap
      if (hashMap[inputArray[i]]) {
        results.push([hashMap[inputArray[i]], inputArray[i]]);
      } else {
        hashMap[sum - inputArray[i]] = inputArray[i];
      }
    }
    return results;
  };

  console.log(TwoOfSum([10, 3, 5, 7, 0, 1, 3, 4], 7));

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
