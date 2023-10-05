import { useEffect, useState, useCallback } from "react";
import List from "@/components/Characters/List";
import FilterBar from "@/components/Characters/FilterBar";
import { ICharacter } from '@/interfaces/character';

const Characters = () => {

  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useState<string>('');

  // Fetch all characters
  useEffect(() => {

    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      });
  }, [ characters ]);

   // Filter characters by name
  const filteredCharacters = useCallback(
    () => {
      if ( searchFilter ) {
        return characters.filter(character => {
          return character.name.toLowerCase().includes(searchFilter.toLowerCase());
        })
      } else {
        return characters;
      }
    }, [characters, searchFilter]
  );

  return (
    <>
      <h1 className="text-3xl text-center mb-5 dark:text-white">Marvel Characters</h1>
      {
        ! isLoading
        ? <>
            <FilterBar onSearchFilter={ setSearchFilter } />
            {
              filteredCharacters().length
              ? <List characters={ filteredCharacters() }/>
              : <p className="text-center dark:text-white">No character found for the given name.</p>
            }
          </>
        : <div className="text-center dark:text-white">Loading...</div>
      }
    </>
  );
};

export default Characters;
