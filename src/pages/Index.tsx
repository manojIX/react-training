import Header from "@components/Header/Header";
import Post from "@components/Post/Post";
import { useFetch } from "@hooks/useFetch";

export default function IndexPage() {
  return (
    <>
      <Header />
      <Post />
    </>
  );
}
