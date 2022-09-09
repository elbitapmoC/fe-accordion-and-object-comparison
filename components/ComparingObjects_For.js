import { useState, useEffect } from "react";

useState;

const ComparingObjects_For = () => {
  const [isEqual, setIsEqual] = useState(false);

  let jangoFett = {
    occupation: "Bounty Hunter",
    genetics: "mediocre",
  };

  let bobaFett = {
    occupation: "Bounty Hunter",
    genetics: "mediocre",
  };

  const compareObjects = (a, b) => {
    const objA = Object.getOwnPropertyNames(a);
    const objB = Object.getOwnPropertyNames(b);

    if (objA.length !== objB.length) return false;
    for (let i = 0; i < objA.length; i++) {
      let propName = objA[i];
      if (a[propName] !== b[propName]) return false;
    }
    return true;
  };

  useEffect(() => {
    setIsEqual(compareObjects(jangoFett, bobaFett));
  });

  return (
    <>
      <h1 className="mt-24 mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Comparing Objects | For
      </h1>
      <aside>{JSON.stringify(jangoFett, null, 2)}</aside>
      <aside>{JSON.stringify(bobaFett, null, 2)}</aside>
      <p className="mt-4"> Result: {isEqual.toString()}</p>
    </>
  );
};

export default ComparingObjects_For;
