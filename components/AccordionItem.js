const AccordionItem = ({ onToggle, active, data }) => {
  const { champion, icon, roles, description } = data;

  return (
    <aside className="pb-10 w-full flex flex-col items-center">
      <button
        type="button"
        className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-900"
        onClick={onToggle}
      >
        <div className="flex flex-col items-center pb-10 pt-10">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src={icon}
            alt={`${champion} image`}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {champion}
          </h5>
          {roles.map((role, idx) => {
            return (
              <span
                key={idx}
                className="text-sm text-gray-500 dark:text-gray-400"
              >
                {role}
              </span>
            );
          })}
        </div>
      </button>
      <aside
        hidden={active}
        className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="pb-10 pt-10 pl-10 pr-10">
          <p className="rounded-full shadow-lg">{description}</p>
        </div>
      </aside>
    </aside>
  );
};

export default AccordionItem;
