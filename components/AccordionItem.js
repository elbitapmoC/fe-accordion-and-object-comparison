const AccordionItem = ({ name, roles, icon, description, onToggle }) => {
  const handleToggle = (index) => {
    onToggle(index);
    console.log(index);
  };

  return (
    <>
      <button
        type="button"
        className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-900"
        onClick={(id) => {
          handleToggle;
        }}
      >
        <div className="flex flex-col items-center pb-10 pt-10">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src={icon}
            alt={`${name} image`}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
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
      <aside className="w-full mb-12 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="pb-10 pt-10 pl-10 pr-10">
          <p className="rounded-full shadow-lg">{description}</p>
        </div>
      </aside>
    </>
  );
};

export default AccordionItem;
