import React, { useState } from "react";
import AccordionItemSingle from "./AccordionItemSingle";
import AccordionItemMulti from "./AccordionItemMulti";

const Accordion = ({ title, multiselect = false }) => {
  const [visibility, setVisibility] = useState();
  let kindOfAccordion;
  const datas = [
    {
      champion: "Corki",
      roles: ["Marksman"],
      mastery: "5",
      icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Corki.png",
      description:
        "The yordle pilot Corki loves two things above all others: flying, and his glamorous mustache... though not necessarily in that order. After leaving Bandle City, he settled in Piltover and fell in love with the wondrous machines he found there. He...",
    },
    {
      champion: "Ekko",
      roles: ["Assassin", "Fighter"],
      mastery: "4",
      icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Ekko.png",
      description:
        "A prodigy from the rough streets of Zaun, Ekko manipulates time to twist any situation to his advantage. Using his own invention, the Zero Drive, he explores the branching possibilities of reality to craft the perfect moment. Though he revels in this...",
    },
    {
      champion: "Fizz",
      roles: ["Assassin", "Fighter"],
      mastery: "3",
      icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Fizz.png",
      description:
        "Fizz is an amphibious yordle, who dwells among the reefs surrounding Bilgewater. He often retrieves and returns the tithes cast into the sea by superstitious captains, but even the saltiest of sailors know better than to cross him—for many are the tales...",
    },
    {
      champion: "Ziggs",
      roles: ["Mage"],
      mastery: "5",
      icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Ziggs.png",
      description:
        "With a love of big bombs and short fuses, the yordle Ziggs is an explosive force of nature. As an inventor's assistant in Piltover, he was bored by his predictable life and befriended a mad, blue-haired bomber named Jinx. After a wild night on the town...",
    },
  ];

  const datasAlt = [
    {
      champion: "Sivir",
      roles: ["Marksman"],
      mastery: "5",
      icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Sivir.png",
      description:
        "Sivir is a renowned fortune hunter and mercenary captain who plies her trade in the deserts of Shurima. Armed with her legendary jeweled crossblade, she has fought and won countless battles for those who can afford her exorbitant price. Known for her...",
    },
    {
      champion: "Vayne",
      roles: ["Marksman", "Assassin"],
      mastery: "4",
      icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Vayne.png",
      description:
        "Shauna Vayne is a deadly, remorseless Demacian monster hunter, who has dedicated her life to finding and destroying the demon that murdered her family. Armed with a wrist-mounted crossbow and a heart full of vengeance, she is only truly happy when...",
    },
    {
      champion: "Tristana",
      roles: ["Marksman", "Assassin"],
      mastery: "3",
      icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Tristana.png",
      description:
        "While many other yordles channel their energy into discovery, invention, or just plain mischief-making, Tristana was always inspired by the adventures of great warriors. She had heard much about Runeterra, its factions, and its wars, and believed her...",
    },
    {
      champion: "Kayle",
      roles: ["Fighter", "Support"],
      mastery: "5",
      icon: "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Kayle.png",
      description:
        "Born to a Targonian Aspect at the height of the Rune Wars, Kayle honored her mother's legacy by fighting for justice on wings of divine flame. She and her twin sister Morgana were the protectors of Demacia for many years—until Kayle became disillusioned...",
    },
  ];

  const handleToggle = (index) => {
    if (visibility === index) {
      setVisibility();
    } else {
      setVisibility(index);
    }
  };

  if (multiselect) {
    kindOfAccordion = (
      <>
        {datas.map((data, idx) => {
          return <AccordionItemMulti data={data} key={idx} />;
        })}
      </>
    );
  } else
    kindOfAccordion = (
      <>
        {datasAlt.map((data, idx) => {
          return (
            <AccordionItemSingle
              data={data}
              key={idx}
              active={visibility === idx}
              toggleVisible={() => {
                handleToggle(idx);
              }}
            />
          );
        })}
      </>
    );
  return (
    <>
      <h1 className="mt-12 mb-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h1>
      {kindOfAccordion}
    </>
  );
};

export default Accordion;
