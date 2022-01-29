import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import * as d3 from "d3";
import mapImage from "../assets/images/kanto-map.png";
import { GET_ALL_POKEMON_LOCATIONS } from "../queries/getAllPokemonLocations";
import { useState } from "react";

const popupContentDefault = {
  title: "Pokemon title",
  description: "Description",
};

export default function Map() {
  const width = 800;
  const height = 800;
  const { data } = useQuery(GET_ALL_POKEMON_LOCATIONS);
  const [svg, setSvg] = useState();
  const [popupContent, setPopupContent] = useState(popupContentDefault);

  useEffect(() => {
    const svg = d3
      .select("#map")
      .style("background", `url(${mapImage}) no-repeat`)
      .style("background-size", "contain");
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
            .style("left", `${d.x + 100}px`)
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

  return (
    <Layout
      title="Kanto Region"
      description="This is the map of the Kanto region"
    >
      <div className="flex justify-center mx-auto w-full overflow-hidden">
        <svg width={width} height={height} id="map"></svg>
        <div
          id="popup"
          className="w-3/12 p-5 text-base bg-white dark:bg-darkSecondary rounded-md absolute hidden transition-all duration-75 ease-out border-darkSecondary border-4 dark:border-white"
        >
          <h3 className="text-fireAccent dark:text-darkFireAccent">
            {popupContent.title}
          </h3>
          <p className="text-darkSecondary dark:text-white">
            {popupContent.description}
          </p>
        </div>
      </div>
    </Layout>
  );
}
