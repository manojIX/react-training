import Header from "@components/Header/Header";
import Post from "@components/Post/Post";
import posts from "@assets/data.json";
import { useState } from "react";

export default function IndexPage() {
  const [data, setData] = useState(posts);

  return (
    <>
      <Header />
      {posts.map(({ post, user }) => (
        <Post user={user} post={post} />
      ))}
    </>
  );
}
