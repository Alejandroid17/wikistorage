const WikiHostName = ({ url, className }) => (
  <footer
    className={`text-sm text-gray-500 m-0 text-left flex-grow-0 ${className}`}
  >
    {new URL(url).hostname}
  </footer>
)

export default WikiHostName
