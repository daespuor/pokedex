import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import ResourcesDropdown from "./ResourcesDropdown";
import ToggleSwitch from "./ToggleSwitch";

export default function Header() {
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
          <ToggleSwitch />
        </ul>
      </nav>
    </header>
  );
}
