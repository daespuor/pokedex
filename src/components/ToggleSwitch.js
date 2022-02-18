import React, { useEffect } from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function ToggleSwitch() {
  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }

  const [enabled, setEnabled] = useState(websiteTheme === "dark");

  useEffect(() => {
    window.__setPreferredTheme(enabled ? "dark" : "light");
  }, [enabled]);

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4"></Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "dark:bg-buttonBackground" : "bg-darkButtonBackground "
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkButtonBackground dark:focus:ring-darkButtonText`}
        >
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-darkButtonBackgroundActive rounded-full transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}
