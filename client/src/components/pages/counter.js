import React, { useEffect, useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("This is the side effect.", count);
//     return () => {
//       console.log(
//         "The component re-rendered. This is part of the cleanup before the next effect.", count
//       );
      
//     };
//   });

//   return (
//     <div>
//       <p>The current count is: {count}</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increase the Count
//       </button>
//     </div>
//   );
// };

// export default Counter;

export default function Counter() {
    const [counterValue, setCounterValue] = useState(0);
  
    useEffect(() => {
      //increments the counter value by 1 every 1 seconds
      let timerId = setTimeout(() => {
        setCounterValue(counterValue + 1);
        timerId = null;
      }, 1000);
      // cleanup the timmer when component unmout
      return () => clearTimeout(timerId);
    });
    return <p>{counterValue}</p>;
  }


// export default function User({ id }) {
//     const [user, setUser] = useState(null);
// useEffect(() => {
    
//     // the side effect takes place here.
    
//     return () => {
//         // the cleanup function
//     }
//     // dependencies array
// }, [id])