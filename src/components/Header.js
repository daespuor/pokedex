import { Link } from "gatsby";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-primary p-5 text-secondary">
      <h1 className="text-3xl">
        <Link to="/">Pokedex</Link>
      </h1>
      <nav>
        <ul className="flex space-x-2">
          <li>Home</li>
          <li>Dashboard</li>
        </ul>
      </nav>
    </header>
  );
}
