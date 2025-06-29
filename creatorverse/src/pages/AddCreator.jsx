import React, { useState } from "react";
import { supabase } from "../client.js";

const AddCreator = () => {
  const [creator, setCreator] = useState({
    name: '',
    description: '',  
    imageURL: '',
    url: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreator((prev) => ({
      ...prev, [name]: value}));
  };

  const addCreator = async (event) => {
    event.preventDefault();
    await supabase
      .from('creators')
      .insert([{ name: creator.name, description: creator.description, imageURL: creator.imageURL, url: creator.url }])
      .select();

      window.location = '/';
  };
  return (
<main className="container" style={{ marginTop: '2rem' }}>
  <form onSubmit={addCreator}>
    <label htmlFor="name">Name</label>
    <input
      id="name"
      type="text"
      name="name"
      value={creator.name}
      onChange={handleChange}
      required
    />

    <label htmlFor="description">Description</label>
    <textarea
      id="description"
      name="description"
      value={creator.description}
      onChange={handleChange}
      required
    />

    <label htmlFor="imageURL">Image URL</label>
    <input
      id="imageURL"
      type="text"
      name="imageURL"
      value={creator.imageURL}
      onChange={handleChange}
    />

    <label htmlFor="url">URL</label>
    <input
      id="url"
      type="url"
      name="url"
      value={creator.url}
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
  </form>
</main>

  );
    
};

export default AddCreator;