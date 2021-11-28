import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import CategoryBadge from "../components/CategoryBadge";
import Layout from "../components/Layout";
import ZoneDialog from "../components/ZoneDialog";

export const query = graphql`
  query SanityPokemon($id: String!) {
    sanityPokemon(id: { eq: $id }) {
      slug {
        current
      }
      zone {
        name
        description
        image {
          asset {
            gatsbyImageData(aspectRatio: 1.5, placeholder: DOMINANT_COLOR)
          }
        }
      }
      weaknesses {
        name
      }
      strengths {
        name
      }
      attacks
      name
      image {
        asset {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
      category {
        name
        color
      }
      id
      description
    }
  }
`;

export default function SanityPokemon({ data }) {
  const [openZoneDetails, setOpenZoneDetails] = useState(false);
  const [currentZone, setCurrentZone] = useState();
  const pokemon = data?.sanityPokemon;
  return (
    <Layout>
      <ZoneDialog
        open={openZoneDetails}
        setOpen={setOpenZoneDetails}
        zone={currentZone}
      />
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-3 w-full md:w-10/12">
          <GatsbyImage
            image={pokemon.image.asset.gatsbyImageData}
            alt={pokemon.name}
          />
        </div>
        <article className="text-left">
          <h2 className="text-4xl text-primary">{pokemon.name}</h2>
          <div className="flex justify-start space-x-4 mt-4">
            {pokemon.category.map((category) => (
              <CategoryBadge
                categoryName={category.name}
                color={category.color}
                key={category.name}
              />
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-xl text-primary">Zones</h3>
            <div className="flex justify-start space-x-4">
              {pokemon.zone.map((zone) => (
                <div className="w-1/5" key={zone.name}>
                  <button
                    onClick={() => {
                      setCurrentZone(zone);
                      setOpenZoneDetails(true);
                    }}
                  >
                    <GatsbyImage
                      image={zone.image.asset.gatsbyImageData}
                      alt={zone.name}
                    />
                  </button>
                  <h3 className="text-primary">{zone.name}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl text-primary">Attacks</h3>
            <ul>
              {pokemon.attacks.map((a) => (
                <ListElement content={a} key={a} />
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="text-xl text-primary">Strengths</h3>
            <ul>
              {pokemon.strengths.map((s) => (
                <ListElement content={s.name} key={s.name} />
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="text-xl text-primary">Weaknesses</h3>
            <ul>
              {pokemon.weaknesses.map((w) => (
                <ListElement content={w.name} key={w.name} />
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="text-xl text-primary">Description</h3>
            <p>{pokemon.description}</p>
          </div>
        </article>
      </section>
    </Layout>
  );
}

const ListElement = ({ content }) => <li>{content}</li>;
