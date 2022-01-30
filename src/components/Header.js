import { useAuth0 } from "@auth0/auth0-react";
import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
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
      <nav>
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
      </nav>
    </header>
  );
}
