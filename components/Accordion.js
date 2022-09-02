import { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";
const Accordion = () => {
  const datas = [
    {
      name: "Corki",
      roles: ["Marksman"],
      mastery: "5",
      icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Corki.png",
      description:
        "The yordle pilot Corki loves two things above all others: flying, and his glamorous mustache... though not necessarily in that order. After leaving Bandle City, he settled in Piltover and fell in love with the wondrous machines he found there. He...",
    },
    {
      name: "Ekko",
      roles: ["Assassin", "Fighter"],
      mastery: "4",
      icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Ekko.png",
      description:
        "A prodigy from the rough streets of Zaun, Ekko manipulates time to twist any situation to his advantage. Using his own invention, the Zero Drive, he explores the branching possibilities of reality to craft the perfect moment. Though he revels in this...",
    },
    {
      name: "Fizz",
      roles: ["Assassin", "Fighter"],
      mastery: "3",
      icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Fizz.png",
      description:
        "Fizz is an amphibious yordle, who dwells among the reefs surrounding Bilgewater. He often retrieves and returns the tithes cast into the sea by superstitious captains, but even the saltiest of sailors know better than to cross him—for many are the tales...",
    },
    {
      name: "Ziggs",
      roles: ["Mage"],
      mastery: "5",
      icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Ziggs.png",
      description:
        "With a love of big bombs and short fuses, the yordle Ziggs is an explosive force of nature. As an inventor's assistant in Piltover, he was bored by his predictable life and befriended a mad, blue-haired bomber named Jinx. After a wild night on the town...",
    },
  ];

  const [isVisible, setVisibility] = useState(0);

  const handleToggle = (index) => {
    setVisibility(index);
  };

  return (
    <>
      <h1 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Accordion
      </h1>
      {datas.map(({ data, index }) => {
        return (
          <AccordionItem
            onToggle={() => handleToggle(index)}
            active={isVisible === index}
            data={data}
            key={index}
          />
        );
      })}
    </>
  );
};

export default Accordion;
