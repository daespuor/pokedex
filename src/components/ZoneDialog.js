import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { SecondaryButton } from "./Button";
import Modal from "./Modal";

export default function ZoneDialog({ open, setOpen, zone }) {
  return (
    <Modal open={open} setOpen={setOpen}>
      {zone && (
        <>
          <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <Modal.Title>Zone: {zone.name}</Modal.Title>
            <div className="flex justify-between">
              <div className="mt-2">
                <GatsbyImage
                  image={zone.image.asset.gatsbyImageData}
                  alt={zone.name}
                />
              </div>
              <Modal.Description>{zone.description}</Modal.Description>
            </div>
          </div>
          <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <SecondaryButton handleClick={() => setOpen(false)}>
              Cancel
            </SecondaryButton>
          </div>
        </>
      )}
    </Modal>
  );
}
