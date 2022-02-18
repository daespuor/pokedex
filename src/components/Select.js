import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export default function Select({ options = [], selected, setSelected, label }) {
  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Label className="text-inputText dark:text-darkInputText">
            {label}
          </Listbox.Label>
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-inputBackground dark:bg-darkInputBackground rounded-lg shadow-md cursor-default focus:outline-none  focus-visible:border-inputText sm:text-sm">
            <span className="block truncate text-inputText dark:text-darkInputText">
              {selected.name}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-inputText dark:text-darkInputText"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-inputBackground dark:bg-darkInputBackground rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  className={({ active }) =>
                    `${
                      active
                        ? "text-selectionOptionsHoverText bg-selectOptionsHoverBackground dark:text-darkSelectOptionsHoverText dark:bg-darkSelectOptionsHoverBackground"
                        : "text-inputText dark:text-darkInputText"
                    }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active
                              ? "text-selectionOptionsHoverText dark:text-darkSelectOptionsHoverText"
                              : "text-inputText dark:text-darkInputText"
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
