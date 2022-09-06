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
  const compareObjects = (a, b) => {};

  useEffect(() => {
    compareObjects(c1, c2);
  }, []);
  return <div>ComparingObjects_For_In</div>;
};

export default ComparingObjects_For_In;
