import React, { useEffect, useState } from "react";
import { supabase } from "../client.js";
import { useParams } from "react-router-dom";

const EditCreator = () => {

  const [creator, setCreator] = useState({
    name: '',
    description: '',  
    imageURL: '',
    url: ''
  });
  const {id} = useParams();

  useEffect(() => {
    const fetchCreator = async () => {
      const {data} = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .single();
      setCreator(data);
    }
    fetchCreator();
  }, [id]);

  const editCreator = async (event) => {
    event.preventDefault();
    await supabase
    .from('creators')
      .update({
        name: creator.name,
        description: creator.description,
        imageURL: creator.imageURL,
        url: creator.url
      })
      .eq('id', id)
      .select()
        window.location = "/creator/" + id;
      
  }
  const deleteCreator = async () => {
    if (window.confirm("Are you sure you want to delete this creator?")) {
      await supabase
        .from('creators')
        .delete()
        .eq('id', id);
      window.location = '/';
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreator((prev) => ({
      ...prev, [name]: value
    }));
  }
  return(
<main className="container" style={{ marginTop: '2rem' }}>
  <form onSubmit={editCreator}>
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
  <div>
    <button type="submit">Edit Creator</button>
    <button type="button" onClick={deleteCreator} style={{ backgroundColor: 'red', color: 'white' }}>
      Delete Creator
    </button>
    </div>
  </form>
</main>

  );
}




  export default EditCreator;