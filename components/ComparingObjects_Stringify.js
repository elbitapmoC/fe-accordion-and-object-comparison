import React, { useEffect, useState } from "react";

const ComparingObjects_Stringify = () => {
  // Same data
  const b1 = { breakfast: "🥝", lunch: "smoothies" };
  const b2 = { breakfast: "🥝", lunch: "smoothies" };

  // Different data
  const c1 = { breakfast: "🧇 🧇 🧇", lunch: "🥡", dinner: "🍕" };
  const c2 = { breakfast: "🥝 🥥 🍌", lunch: "🥙", dinner: "🍛" };

  const [isEqual, setIsEqual] = useState(false);

  // Function accepts two parameters.
  const compareObjects = (a, b) => {
    if (JSON.stringify(a) === JSON.stringify(b)) {
      setIsEqual(true);
    } else {
      setIsEqual(false);
    }
  };

  useEffect(() => {
    compareObjects(c1, c2);
  }, []);

  return (
    <>
      <h1 className="mt-24 mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Comparing Objects | Stringify
      </h1>
      <aside>{JSON.stringify(c1, null, 2)}</aside>
      <aside>{JSON.stringify(c2, null, 2)}</aside>
      <p className="mt-4">Result: {isEqual.toString()}</p>
    </>
  );
};

export default ComparingObjects_Stringify;
