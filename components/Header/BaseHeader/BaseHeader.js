const BaseHeader = ({ children }) => {
  return (
    <header className="sticky top-0 z-40 flex-none w-full bg-white border-b">
      <div className="mx-auto">
        <div className="py-2 mx-5 lg:mx-20">
          <div className="relative flex items-center">{children}</div>
        </div>
      </div>
    </header>
  )
}

export default BaseHeader
