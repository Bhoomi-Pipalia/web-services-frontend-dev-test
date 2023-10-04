import { useEffect, useState, useCallback } from "react";
import List from "@/components/Characters/List";
import { ICharacter } from '@/interfaces/character';

const Characters = () => {

  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setLoading] = useState(true);

  // Fetch all characters
  useEffect(() => {

    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      });
  }, [ characters ]);

  return (
    <>
      <h1 className="text-3xl text-center mb-5 dark:text-white">Marvel Characters</h1>
      {
        ! isLoading
        ? <List characters={ characters }/>
        : <div className="text-center dark:text-white">Loading...</div>
      }
    </>
  );
};

export default Characters;
