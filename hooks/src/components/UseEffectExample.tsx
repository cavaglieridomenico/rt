import { useState, useEffect } from "react";

const UseEffectExample = () => {
  const [resourceType, setResourceType] = useState<string>("posts");
  const [items, setItems] = useState<[]>([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <>
      <button
        onClick={() => setResourceType("posts")}
        className="useeffect-example"
      >
        Posts
      </button>
      <button
        onClick={() => setResourceType("users")}
        className="useeffect-example"
      >
        Users
      </button>
      <button
        onClick={() => setResourceType("comments")}
        className="useeffect-example"
      >
        Comments
      </button>
      <button
        onClick={() => setItems([])}
        className="useeffect-example"
        style={{ marginLeft: ".3rem" }}
      >
        Clear
      </button>
      <h1 style={{ fontSize: "2rem" }}>{resourceType}</h1>
      {items.map((item, index) => {
        return <pre key={index}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};

export default UseEffectExample;
