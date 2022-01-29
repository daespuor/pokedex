import { gql } from "@apollo/client";

export const GET_ALL_POKEMON_LOCATIONS = gql`
  query AllPokemonLocation {
    Pokemon_Location {
      id
      Pokemon {
        name
        description
        slug {
          current
        }
        image {
          asset {
            url
            path
          }
        }
      }
      x
      y
    }
  }
`;
