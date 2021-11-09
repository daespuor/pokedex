import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import PokemonCard from "../components/PokemonCard";

export const query = graphql`
  query AllPokemons {
    allSanityPokemon {
      nodes {
        id
        image {
          asset {
            gatsbyImageData
          }
        }
        name
        slug {
          current
        }
        _createdAt(fromNow: true)
        category {
          color
          name
        }
        description
      }
    }
  }
`;

export default function Pokedex({ data }) {
  const pokemons = data?.allSanityPokemon?.nodes || [];
  return (
    <Layout>
      <h2 className="text-4xl text-primary">Pokemon List</h2>
      <section className="flex  my-12 flex-wrap">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </Layout>
  );
}
