import { useState } from 'react';
import { sculptures } from '../data/Esculture';
export default function Gallery() {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1);
  }
  let sculpture = sculptures[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>({index + 1} of {sculptures.length})</h3>
      <img src={sculpture.url} alt={sculpture.alt}
      />
      <p>{sculpture.description}</p>
    </>
  );
}