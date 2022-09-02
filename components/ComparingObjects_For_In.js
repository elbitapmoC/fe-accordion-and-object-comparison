import React, { useEffect, useState } from "react";

const Accordion = () => {
  const data = {
    name: "Corki",
    roles: ["Marksman"],
    mastery: "5",
    icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Corki.png",
  };
  const ekko = {
    name: "Ekko",
    roles: ["Assassin", "Fighter"],
    mastery: "4",
    icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Ekko.png",
  };
  const fizz = {
    name: "Fizz",
    roles: ["Assassin", "Fighter"],
    mastery: "3",
    icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Fizz.png",
  };
  const ziggs = {
    name: "Ziggs",
    roles: ["Mage"],
    mastery: "5",
    icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Ziggs.png",
  };

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
    compareObjects(ekko, ziggs);
  }, []);

  return (
    <>
      <h1 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Comparing Objects | For...In
      </h1>
      <AvatarsList user={data} />
      <p className="mt-4">Result: {isEqual.toString()}</p>
    </>
  );
};

export default Accordion;
