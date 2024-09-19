export default function ItemListControls({ setSortItem, setFilter }) {
  return (
    <>
      <span onClick={() => setSortItem("name")}>Name</span>
      {"            "}
      <span onClick={() => setSortItem("description")}>Description</span>
      {"            "}
      <input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
    </>
  );
}
