import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
      </nav>
    </div>
  );
}

export default Home;
