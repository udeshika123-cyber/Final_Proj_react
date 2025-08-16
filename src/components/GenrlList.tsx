import React from "react";
import useGenre from "../hooks/useGenre";

const GenrlList = () => {
  const { genre } = useGenre();
  return (
    <div>
      <ul>
        {genre.map((gen) => (
          <li key={gen.id}>{gen.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenrlList;
