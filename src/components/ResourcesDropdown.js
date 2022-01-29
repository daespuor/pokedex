import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "gatsby";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function ResourcesDropdown({ resources }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className="inline-flex justify-center w-full px-4 py-2 
      text-sm font-medium text-white bg-black dark:text-darkSecondary
      rounded-md bg-opacity-20 hover:bg-opacity-30 
      focus:outline-none focus-visible:ring-2 
      focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Resources
        <ChevronDownIcon
          className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100 dark:text-darkSecondary"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className="absolute right-0 w-56 mt-2 origin-top-right
         bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1
          ring-black ring-opacity-5 focus:outline-none"
        >
          {resources.map((r) => (
            <Menu.Item key={r.id} as="li">
              {({ active }) => (
                <Link
                  to={r.frontmatter.slug}
                  className={`${
                    active
                      ? "bg-fireAccent text-white dark:bg-darkFireAccent"
                      : "text-primary"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  {r.frontmatter.title}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
