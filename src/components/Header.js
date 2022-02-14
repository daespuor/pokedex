import { useAuth0 } from "@auth0/auth0-react";
import { Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import { Link, useStaticQuery, graphql } from "gatsby";
import React, { Fragment } from "react";
import ResourcesDropdown from "./ResourcesDropdown";
import ToggleSwitch from "./ToggleSwitch";

export default function Header() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0();
  const data = useStaticQuery(graphql`
    query GetAllMDX {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `);
  const resources = data?.allMdx?.nodes || [];
  return (
    <header className="flex justify-between items-center bg-primary dark:bg-darkPrimary p-5 text-secondary dark:text-darkSecondary">
      <h1 className="text-3xl">
        <Link to="/">Pokedex</Link>
      </h1>
      <nav className="hidden md:block">
        <HeaderOptionsDesktop
          resources={resources}
          logout={logout}
          loginWithRedirect={loginWithRedirect}
          isLoading={isLoading}
          isAuthenticated={isAuthenticated}
        />
      </nav>
      <nav className="block md:hidden">
        <HeaderOptionsMobile
          resources={resources}
          logout={logout}
          loginWithRedirect={loginWithRedirect}
          isLoading={isLoading}
          isAuthenticated={isAuthenticated}
        />
      </nav>
    </header>
  );
}

const HeaderOptionsDesktop = ({
  resources,
  logout,
  isLoading,
  isAuthenticated,
  loginWithRedirect,
}) => {
  return (
    <ul className="flex space-x-2 items-center">
      <li>
        <Link to="/map">Kanto Map</Link>
      </li>
      <ResourcesDropdown resources={resources} />
      {!isAuthenticated && !isLoading && (
        <li>
          <button
            className="rounded-md bg-fireAccent hover:bg-secondary dark:bg-darkSecondary dark:hover:bg-accent text-white hover:text-primary dark:text-white  py-2 px-4 font-bold"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        </li>
      )}
      {isAuthenticated && !isLoading && (
        <li>
          <button
            className="rounded-md border-2 border-secondary dark:border-darkSecondary  text-white   py-2 px-4 font-bold"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </button>
        </li>
      )}
      <ToggleSwitch />
    </ul>
  );
};

const HeaderOptionsMobile = ({
  resources,
  logout,
  isLoading,
  isAuthenticated,
  loginWithRedirect,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className="inline-flex justify-center w-full px-4 py-2 
      text-sm font-medium text-white bg-black dark:text-darkSecondary
      rounded-md bg-opacity-20 hover:bg-opacity-30 
      focus:outline-none focus-visible:ring-2 
      focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <MenuIcon
          className="w-full h-5  text-violet-200 hover:text-violet-100 dark:text-darkSecondary"
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
          ring-black ring-opacity-5 focus:outline-none z-20"
        >
          <Menu.Item as="li">
            {({ active }) => (
              <Link
                to="/map"
                className={`${
                  active
                    ? "bg-fireAccent text-white dark:bg-darkFireAccent"
                    : "text-primary"
                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
              >
                Kanto Map
              </Link>
            )}
          </Menu.Item>
          <Menu.Item as="li" className="p-2 text-darkCard text-sm">
            Resources
          </Menu.Item>
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
          {!isAuthenticated && !isLoading && (
            <Menu.Item
              as="li"
              className="p-2 text-darkSecondary dark:text-darkPrimary flex justify-around"
            >
              <button
                className="rounded-md bg-fireAccent hover:bg-secondary dark:bg-darkSecondary dark:hover:bg-accent text-white hover:text-primary dark:text-white  py-2 px-4 font-bold"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
              <ToggleSwitch />
            </Menu.Item>
          )}
          {isAuthenticated && !isLoading && (
            <Menu.Item
              as="li"
              className="p-2 text-darkSecondary dark:text-darkPrimary flex justify-around"
            >
              <button
                className="rounded-md border-2 border-darkSecondary  text-darkSecondary   py-2 px-4 font-bold"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </button>
              <ToggleSwitch />
            </Menu.Item>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
