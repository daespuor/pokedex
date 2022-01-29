import { Dialog } from "@headlessui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Modal from "./Modal";

export default function ZoneDialog({ open, setOpen, zone }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      {zone && (
        <>
          <div className="bg-white dark:bg-darkCard px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <Dialog.Title
              as="h3"
              className="text-lg leading-6 font-medium text-primary dark:text-darkPrimary"
            >
              Zone: {zone.name}
            </Dialog.Title>
            <div className="flex justify-between">
              <div className="mt-2">
                <GatsbyImage
                  image={zone.image.asset.gatsbyImageData}
                  alt={zone.name}
                />
              </div>
              <Dialog.Description className="ml-4 dark:text-white">
                {zone.description}
              </Dialog.Description>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-darkCard px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-primary dark:border-darkPrimary shadow-sm px-4 py-2 bg-accent dark:bg-primary text-base font-medium text-primary dark:text-secondary hover:text-secondary dark:hover:bg-accent hover:bg-primary dark:hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </Modal>
  );
}
