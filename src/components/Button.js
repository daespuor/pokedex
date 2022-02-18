import React from "react";

export const PrimaryButton = ({ handleClick, children }) => (
  <button
    className="rounded-md bg-buttonBackground active:bg-buttonBackgroundActive dark:active:bg-darkButtonBackgroundActive dark:bg-darkButtonBackground  text-buttonText  dark:text-darkButtonText  py-2 px-4 font-bold"
    onClick={handleClick}
  >
    {children}
  </button>
);

export const SecondaryButton = ({ handleClick, children }) => (
  <button
    className="rounded-md border border-secondaryButtonBorder dark:border-darkSecondaryButtonBorder shadow-sm px-4 py-2 bg-secondaryButtonBackground dark:bg-darkSecondaryButtonBackground text-base font-medium text-secondaryButtonText  dark:text-darkSecondaryButtonText dark:active:bg-secondaryButtonBackground active:bg-darkSecondaryButtonBackground  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkSecondaryButtonBackground sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
    onClick={handleClick}
  >
    {children}
  </button>
);

export const TertiaryButton = ({ handleClick, children }) => (
  <button
    className="rounded-md border-2 border-tertiaryButtonBackground dark:border-darkTertiaryButtonBackground  text-tertiaryButtonText dark:text-darkTertiaryButtonText active:bg-darkTertiaryButtonBackground dark:active:bg-tertiaryButtonBackground  py-2 px-4 font-bold"
    onClick={handleClick}
  >
    {children}
  </button>
);
