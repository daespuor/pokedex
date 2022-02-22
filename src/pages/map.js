import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import * as d3 from "d3";
import mapImage from "../assets/images/kanto-map.png";
import { GET_ALL_POKEMON_LOCATIONS } from "../queries/getAllPokemonLocations";
import { useState } from "react";
import AddPokemonLocation from "../components/AddPokemonLocation";
import { useAuth0 } from "@auth0/auth0-react";
import { PrimaryButton } from "../components/Button";
import LoadingBar from "../components/LoadingBAr";

const popupContentDefault = {
  title: "Pokemon title",
  description: "Description",
};

export default function Map() {
  const width = 800;
  const height = 600;
  const { data, loading } = useQuery(GET_ALL_POKEMON_LOCATIONS);
  const { isAuthenticated } = useAuth0();
  const [openAddLocation, setOpenAddLocation] = useState(false);
  const [svg, setSvg] = useState();
  const [popupContent, setPopupContent] = useState(popupContentDefault);

  useEffect(() => {
    const svg = d3
      .select("#map")
      .style("background", `url(${mapImage}) no-repeat`)
      .style("background-size", `100% 100%`);

    setSvg(svg);
  }, []);

  useEffect(() => {
    if (svg) {
      const g = svg
        .selectAll("g")
        .data(data?.Pokemon_Location || [])
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x},${d.y})`);

      g.append("image")
        .attr("width", 100)
        .attr("height", 100)
        .style("z-index", 1)
        .attr("xlink:href", (d) => d.Pokemon.image.asset.url)
        .attr("pointer-events", "all")
        .style("transition", "all 0.5s ease-out")
        .on("mouseover", function (d) {
          const pokemon = d.target.__data__.Pokemon;
          d3.select(this).style("transform", "scale(1.1)");
          d3.select("#popup")
            .style("left", `${d.x + 50}px`)
            .style("top", `${window.scrollY + d.y - 60}px`)
            .style("display", "block");
          setPopupContent({
            title: pokemon.name,
            description: pokemon.description,
          });
        })
        .on("mouseout", function (d) {
          d3.select(this).style("transform", "scale(1)");
          d3.select("#popup").style("display", "none");
          setPopupContent(popupContentDefault);
        });
    }
  }, [data, svg]);

  const addPokemon = (selectedPokemon) => {
    const g = svg
      .append("g")
      .data([selectedPokemon])
      .attr("transform", () => `translate(${width / 2 - 10},${height / 4})`)
      .call(
        d3
          .drag()
          .on("drag", (e) =>
            g.attr("transform", () => `translate(${e.x - 50},${e.y - 50})`)
          )
          .on("end", (e) => console.log(e.x, e.y))
      );

    g.append("image")
      .attr("width", 100)
      .attr("height", 100)
      .style("z-index", 1)
      .attr("xlink:href", (d) => d.image.asset.url)
      .attr("pointer-events", "all");
  };

  return (
    <Layout
      title="Kanto Region"
      description="This is the map of the Kanto region"
    >
      <div className="h-14">
        {isAuthenticated && (
          <PrimaryButton handleClick={() => setOpenAddLocation(true)}>
            Add Location +
          </PrimaryButton>
        )}
      </div>
      <div className="flex  justify-center  mx-auto w-full overflow-hidden mt-10">
        <svg width={width} viewBox={`0 0 ${width} ${height}`} id="map"></svg>
        <div
          id="popup"
          className="w-2/3 md:w-3/12 p-5 text-base bg-popupBackground dark:bg-darkPopupBackground rounded-md absolute hidden transition-all duration-75 ease-out border-darkPopupBackground border-4 dark:border-popupBackground"
        >
          <h3 className="text-popupTitle dark:text-darkPopupTitle">
            {popupContent.title}
          </h3>
          <p className="text-popupText dark:text-darkPopupText">
            {popupContent.description}
          </p>
        </div>
      </div>
      <LoadingBar show={loading} />
      <AddPokemonLocation
        open={openAddLocation}
        setOpen={setOpenAddLocation}
        addPokemon={addPokemon}
      />
    </Layout>
  );
}
