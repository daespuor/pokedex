import React from "react";
import Header from "./Header";
import Seo from "./Seo";

export default function Layout({ children, title, description }) {
  return (
    <div>
      <Seo title={title} description={description} />
      <Header />
      <div className="w-full h-screen bg-layout bg-auto bg-left gradient-mask-tr-70% absolute z-neg-1"></div>
      <main className="p-5 md:p-20">{children}</main>
    </div>
  );
}
