import { useState } from "react";

const AccordionItemSingle = ({ data }) => {
  const { champion, roles, icon, description } = data;
  const [expanded, setExpanded] = useState(false);

  const handleVisibility = () => {
    setExpanded(!expanded);
  };

  return (
    <section
      id="accordion-collapse"
      data-accordion="collapse"
      className="w-full max-w-lg"
    >
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded={expanded}
          aria-controls="accordion-collapse-body-1"
          onClick={handleVisibility}
        >
          <span>{champion}</span>
        </button>
      </h2>
      <aside
        hidden={!expanded}
        className="border border-gray-200 dark:border-gray-700 p-12"
      >
        <img
          src={icon}
          alt={`Thumbnail of ${champion}`}
          className="mb-4 m-auto"
        />
        <span className="text-center">
          {roles.map((role, id) => {
            return <p key={id}>{role}</p>;
          })}
        </span>
        <p className="mt-12">{description}</p>
      </aside>
    </section>
  );
};

export default AccordionItemSingle;
