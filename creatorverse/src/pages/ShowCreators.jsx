import React from "react";
import Card from "../components/Card.jsx";

const ShowCreators = ({ creators }) => (
  <main className="container">
    <section className="card-grid">
      {creators && creators.length > 0 ? (
        creators.map((creator) => <Card key={creator.id} creator={creator} />)
      ) : (
        <p>No creators added yet.</p>
      )}
    </section>
  </main>
);

export default ShowCreators;
