import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import CompactSwitch from "../CompactSwitch/CompactSwitch"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"

const SettingMenu = () => {
  return (
    <div className="fixed">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-adjustments-horizontal dark:text-slate-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="14" cy="6" r="2"></circle>
              <line x1="4" y1="6" x2="12" y2="6"></line>
              <line x1="16" y1="6" x2="20" y2="6"></line>
              <circle cx="8" cy="12" r="2"></circle>
              <line x1="4" y1="12" x2="6" y2="12"></line>
              <line x1="10" y1="12" x2="20" y2="12"></line>
              <circle cx="17" cy="18" r="2"></circle>
              <line x1="4" y1="18" x2="15" y2="18"></line>
              <line x1="19" y1="18" x2="20" y2="18"></line>
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg dark:bg-slate-600 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <div className="flex gap-1 px-2 py-2 text-gray-800 dark:text-slate-300">
                  <CompactSwitch iconClassName="text-violet-500 dark:text-slate-300" />
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className="flex gap-1 px-2 py-2 text-gray-800 dark:text-slate-300">
                  <ThemeSwitch iconClassName="text-violet-500 dark:text-slate-300" />
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default SettingMenu
