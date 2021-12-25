import dynamic from "next/dynamic"
import BaseFooter from "../BaseFooter/BaseFooter"

const GitHubLink = dynamic(import("../../Link/GitHubLink"))

const MainFooter = () => {
  return (
    <BaseFooter>
      <div className="flex items-center justify-center w-full text-slate-400">
        <div>
          <strong className="mr-1">WikiStorage</strong>
          <span className="mr-1">by</span>
          <GitHubLink
            href="https://github.com/Alejandroid17"
            showIcon={false}
            linkText={"Alejandroid17"}
          />
        </div>
      </div>
    </BaseFooter>
  )
}

export default MainFooter
