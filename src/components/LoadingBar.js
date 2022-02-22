import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { StaticImage } from "gatsby-plugin-image";

export default function LoadingBar({ show }) {
  return (
    <Transition show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => console.log("closing")}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-loadingOverlay dark:bg-darkLoadingOverlay bg-opacity-50 dark:bg-opacity-60 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block transform transition-all sm:my-8 sm:align-middle bg-loading bg-cover bg-left-top bg-no-repeat"
              style={{
                animation: "movePokemon 0.8s steps(4, start) infinite",
                width: "325px",
                height: "277px",
              }}
            ></div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
