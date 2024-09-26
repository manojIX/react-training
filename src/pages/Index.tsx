import Header from "@components/Header/Header";
import Post from "@components/Post/Post";
import posts from "@assets/data.json";
import { useState } from "react";

export default function IndexPage() {
  const [data, setData] = useState(posts);
  const addComment = (postId: string, comment: string) => {
    const newData = { ...data };
    const index = data.findIndex((post) => post.post.id === postId);
    newData[index].post.comments.push({
      comment,
      comment_user_name: "anonymous",
    });
  };

  return (
    <>
      <Header />
      {posts.map(({ post, user }) => (
        <Post user={user} post={post} addComment={addComment} />
      ))}
    </>
  );
}
