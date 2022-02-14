import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import Modal from "./Modal";
import Select from "./Select";
import { useStaticQuery, graphql } from "gatsby";

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
        <div className="bg-white dark:bg-darkCard px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-md">
          <Dialog.Title
            as="h3"
            className="text-lg leading-6 font-medium text-primary dark:text-darkPrimary"
          >
            Add Pokemon Location
          </Dialog.Title>
          <div className="w-96 my-5 text-darkSecondary">
            <Select
              selected={selected}
              setSelected={setSelected}
              options={pokemons}
              label="Pokemon"
            />
            <div className="flex justify-end mt-5">
              <button
                className="mr-2 rounded-md bg-darkCard hover:bg-accent dark:bg-darkSecondary dark:hover:bg-secondary text-white hover:text-primary dark:hover:text-darkSecondary  py-2 px-4 font-bold"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-fireAccent hover:bg-darkSecondary dark:bg-accent dark:hover:bg-darkPrimary text-white  dark:text-darkSecondary  py-2 px-4 font-bold"
                onClick={handleConfirm}
                disabled={!selected}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
