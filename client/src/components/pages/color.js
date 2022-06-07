import React, { useState, useEffect } from "react";

function Color() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    let unmounted = false;
    console.log('aaa1', unmounted)
    setTimeout(() => {
        console.log('aaa2', unmounted)
      if (!unmounted) {
        setColor("green");
      }
    }, 3000);

    return () => {
      unmounted = true;
    };
  }, []);

  return <p style={{ color }}>{color}</p>;
}
export default Color;