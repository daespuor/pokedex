import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="w-full h-screen bg-layout bg-auto bg-left gradient-mask-tr-70% absolute z-neg-1"></div>
      <main className="p-20">{children}</main>
    </div>
  );
}
