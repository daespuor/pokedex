import { useAuth0 } from "@auth0/auth0-react";
import { navigate } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

export default function UpdateMap() {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    navigate("/");
    return null;
  }

  return (
    <Layout
      title="Kanto Region Update"
      description="Update here the pokemons relaed with the kanto region map"
    >
      Callback
    </Layout>
  );
}
