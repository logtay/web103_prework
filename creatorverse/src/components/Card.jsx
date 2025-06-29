import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineInfo, MdEdit } from 'react-icons/md';

const Card = ({ creator }) => {
  return (
    <article className="card">

        {creator.imageURL && (
          <img
            src={creator.imageURL}
            alt={creator.name}
          />
        )}
   

      <div>
        <header>
          <h3>{creator.name} <Link to={`/creator/${creator.id}`} style={{ color: 'inherit', textDecoration: 'none',}}><MdOutlineInfo size="22" /></Link> <Link to={`/edit/${creator.id}`} style={{ color: 'inherit', textDecoration: 'none',}}><MdEdit size="20"/></Link></h3>
        </header>
        <p>{creator.description}</p>
      </div>
    </article>
  );
};

export default Card;
