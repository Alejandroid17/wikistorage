const WikiHashtags = ({ hashtags }) =>
  hashtags.map((hashtag, index) => (
    <span
      key={index}
      className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-slate-400 dark:text-gray-800"
    >
      {`#${hashtag}`}
    </span>
  ))

export default WikiHashtags
