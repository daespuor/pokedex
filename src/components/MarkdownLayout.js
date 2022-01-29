import React from "react";
import Layout from "./Layout";

export default function MarkdownLayout({ children, pageContext }) {
  const { title, description } = pageContext.frontmatter;
  return (
    <Layout title={title} description={description}>
      <main className="mdx-layout">{children}</main>
    </Layout>
  );
}
