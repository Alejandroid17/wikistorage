const WikiDescription = ({ description }) => (
  <div className="flex-grow mx-0 my-auto text-sm text-left">
    <p className={"m-0 text-ellipsis line-clamp-2 dark:text-slate-300"}>
      {description}
    </p>
  </div>
)

export default WikiDescription
