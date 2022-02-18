import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import CategoryBadge from "./CategoryBadge";

export default function PokemonCard({ pokemon }) {
  return (
    <article className="border-bodyText dark:border-darkBodyText border-2 w-72 m-5 overflow-hidden rounded-md bg-cardBackground dark:bg-darkCardBackground dark:text-darkBodyText">
      <Link to={`/${pokemon.slug.current}`}>
        <div className="p-3">
          <GatsbyImage
            image={pokemon.image.asset.gatsbyImageData}
            alt={pokemon.name}
          />
        </div>
        <h3 className="text-center">{pokemon.name}</h3>
        <div className="flex justify-center space-x-4">
          {pokemon.category.map((category) => (
            <CategoryBadge
              key={category.name}
              categoryName={category.name}
              color={category.color}
            />
          ))}
        </div>
        <p className=" p-5 h-full m-0">{pokemon.description}</p>
      </Link>
    </article>
  );
}
