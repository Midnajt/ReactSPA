import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>My Home 0_o page</h1>;
      <p>
        Go to <Link to="/products">The list of products</Link>
      </p>
    </>
  );
}

export default Home;
