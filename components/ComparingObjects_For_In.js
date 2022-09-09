import React, { useEffect, useState } from "react";

const ComparingObjects_For_In = () => {
  const [isEqual, setIsEqual] = useState(false);

  // Same data
  const b1 = { breakfast: "🥝", lunch: "smoothies" };
  const b2 = { breakfast: "🥝", lunch: "smoothies" };

  // Different data
  const c1 = { breakfast: "🧇 🧇 🧇", lunch: "🥡", dinner: "🍕" };
  const c2 = { breakfast: "🥝 🥥 🍌", lunch: "🥙", dinner: "🍛" };

  // Function accepts two parameters.
  const compareObjects = (a, b) => {
    if (a.length === b.length) {
      for (const key in a) {
        // key for each entry
        // breakfast, lunch, dinner
        // These ^ would be keys.
        if (a[key] !== b[key]) return false;
      }
      return true;
    }
    return false;
  };

  useEffect(() => {
    setIsEqual(compareObjects(b1, b2));
  }, []);
  return (
    <>
      <h1 className="mt-24 mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Comparing Objects | For In
      </h1>
      <aside>{JSON.stringify(b1, null, 2)}</aside>
      <aside>{JSON.stringify(b2, null, 2)}</aside>
      <p className="mt-4">Result: {isEqual.toString()}</p>
    </>
  );
};

export default ComparingObjects_For_In;
