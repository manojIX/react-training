import data from "./data.json";

function Post({ postData, allowControls }) {
  const { id, title } = postData;

  const handleEdit = () => {
    console.log(`The post ${id} has been edited`);
  };
  const handleDelete = () => {
    console.log(`The post ${id} has been deleted`);
  };

  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      {allowControls && <button onClick={handleEdit}>edit</button>}
      {allowControls && <button onClick={handleDelete}>delete</button>}
    </div>
  );
}
export default function PostsView() {
  const { posts } = data;
  return (
    <>
      <h1 className="heading">The total number of posts is {posts.length}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Post postData={post} allowControls={post.userId === 123} />
          </li>
        ))}
      </ul>
    </>
  );
}