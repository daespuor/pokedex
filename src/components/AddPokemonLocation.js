import React, { useState } from "react";
import Modal from "./Modal";
import Select from "./Select";
import { useStaticQuery, graphql } from "gatsby";
import { PrimaryButton, SecondaryButton } from "./Button";

export default function AddPokemonLocation({ open, setOpen, addPokemon }) {
  const data = useStaticQuery(graphql`
    query AllPokemonsSelect {
      allSanityPokemon {
        nodes {
          id
          image {
            asset {
              url
            }
          }
          name
        }
      }
    }
  `);
  const pokemons = data?.allSanityPokemon?.nodes;
  const [selected, setSelected] = useState(pokemons?.[0]);
  const handleConfirm = () => {
    addPokemon(selected);
    setOpen(false);
  };

  return (
    <Modal open={open} setOpen={setOpen}>
      {open && (
        <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-md">
          <Modal.Title>Add Pokemon Location</Modal.Title>
          <div className="w-96 my-5 text-modalText">
            <Select
              selected={selected}
              setSelected={setSelected}
              options={pokemons}
              label="Pokemon"
            />
            <div className="flex justify-around mt-5">
              <SecondaryButton handleClick={() => setOpen(false)}>
                Cancel
              </SecondaryButton>
              <PrimaryButton handleClick={handleConfirm}>Add</PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
