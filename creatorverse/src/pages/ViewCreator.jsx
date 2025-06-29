import React, { useState, useEffect } from "react";
import { supabase } from "../client.js";
import { useParams, Link } from "react-router-dom";

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState({ name: "", description: "", imageURL: "", url: "" });

  const fetchCreator = async () => {
    const { data } = await supabase.from("creators").select().eq("id", id).single();
    setCreator(data);
  };

  useEffect(() => {
    fetchCreator();
  }, [id]);

  return (
    <main
      className="container"
      style={{
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <article style={{ maxWidth: "700px", width: "100%" }}>
        <header>
          <h1>{creator?.name}</h1>
        </header>

        {creator?.imageURL && (
          <div
            style={{
              width: "100%",
              height: "350px",
              overflow: "hidden",
              borderRadius: "0.75rem",
              marginBottom: "1rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={creator.imageURL}
              alt={creator.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        )}

        <p>{creator?.description}</p>

        <footer
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href={creator.url}
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            className="secondary"
            style={{ minWidth: "120px", textAlign: "center" }}
          >
            Creator's Page
          </a>

          <Link
            to={`/edit/${creator.id}`}
            role="button"
            style={{ minWidth: "120px", textAlign: "center" }}
          >
            Edit Creator
          </Link>
        </footer>
      </article>
    </main>
  );
};

export default ViewCreator;
