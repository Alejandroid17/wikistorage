import dynamic from "next/dynamic"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBoxOpen, faSearch } from "@fortawesome/free-solid-svg-icons"
import SettingMenu from "../../Menus/SettingMenu"

const GitHubLink = dynamic(import("../../Link/GitHubLink"))
const SearchInput = dynamic(import("../../SearchInput/SearchInput"))
const BaseHeader = dynamic(import("../BaseHeader/BaseHeader"))
const TitleHeader = dynamic(import("../TitleHeader/TitleHeader"))

library.add(faBoxOpen, faSearch, faGithub)

const MainHeader = ({ onSearch }) => {
  return (
    <BaseHeader>
      <div className="flex w-1/3 overflow-hidden lg:w-1/5">
        <TitleHeader />
      </div>
      <div className="flex gap-1 overflow-hidden w-3/3 sm:w-2/3 lg:w-3/5">
        <SearchInput onChange={onSearch} />
        <div className="">
          <SettingMenu />
        </div>
      </div>
      <div className="flex items-center justify-end w-1/3 pl-8 lg:w-1/5">
        <GitHubLink href="https://github.com/Alejandroid17/wikistorage" />
      </div>
    </BaseHeader>
  )
}

export default MainHeader
