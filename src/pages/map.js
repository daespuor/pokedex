import { useQuery } from "@apollo/client";
import React from "react";
import Layout from "../components/Layout";
import { GET_ALL_POKEMON_LOCATIONS } from "../queries/getAllPokemonLocations";

export default function Map() {
  const { data, loading } = useQuery(GET_ALL_POKEMON_LOCATIONS);
  console.log(data)
  return (
    <Layout
      title="Kanto Region"
      description="This is the map of the Kanto region"
    >
      My map here!
    </Layout>
  );
}
