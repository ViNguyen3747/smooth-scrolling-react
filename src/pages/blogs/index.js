import React from "react";
import { createClient } from "contentful";
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: "blogPost" });
  return {
    props: {
      blogs: res.items,
    },
  };
}
const Blogs = ({ blogs }) => {
  console.log(blogs);
  return <></>;
};

export default Blogs;
