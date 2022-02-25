const WikiTitle = ({ title, className }) => (
  <header
    className={`text-left text-lg m-0 flex-grow font-bold text-gray-900 ${className}`}
  >
    <p className="m-0 overflow-hidden text-ellipsis line-clamp-1 dark:text-slate-200">
      {title}
    </p>
  </header>
)

export default WikiTitle
