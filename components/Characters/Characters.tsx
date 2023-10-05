import { useEffect, useState, useCallback } from "react";
import { storeCharacters, getStoredCharacters } from "@/utils/CharactersLocalStorage";
import List from "@/components/Characters/List";
import FilterBar from "@/components/Characters/FilterBar";
import { ICharacter } from '@/interfaces/character';


const Characters = () => {

  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [tagFilter, setTagFilter] = useState("");

  // Fetch all characters
  useEffect(() => {

    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((data) => {
        let storedCharacters = getStoredCharacters();

        if ( storedCharacters ) {
          let updatedCharacters = storedCharacters.map( ( character : ICharacter, index : number ) => {
            return Object.assign({}, character, data[index])
          });

          setCharacters(updatedCharacters);
          storeCharacters(updatedCharacters);

        } else {

          setCharacters(data);
          storeCharacters(data);
        }

        setLoading(false);
      });
  }, [ characters ]);

  // Filter characters by name and tags
  const filteredCharacters = useCallback(
    () => {
      if ( searchFilter && tagFilter ) {
        return characters.filter(character => {
          return character.tags && character.tags.includes(tagFilter) && character.name.toLowerCase().includes(searchFilter.toLowerCase());
        })
      } else if ( searchFilter ) {
        return characters.filter(character => {
          return character.name.toLowerCase().includes(searchFilter.toLowerCase());
        })
      } else if ( tagFilter ) {
        return characters.filter(character => {
          return character.tags && character.tags.includes(tagFilter);
        })
      } else {
        return characters;
      }
    }, [characters, searchFilter, tagFilter]
  );

  return (
    <>
      <h1 className="text-3xl text-center mb-5 dark:text-white">Marvel Characters</h1>
      {
        ! isLoading
        ? <>
            <FilterBar onSearchFilter={ setSearchFilter } onTagFilter={ setTagFilter } />
            {
              filteredCharacters().length
              ? <List characters={ filteredCharacters() }/>
              : <p className="text-center dark:text-white">No character found for the given name or category.</p>
            }
          </>
        : <div className="text-center dark:text-white">Loading...</div>
      }
    </>
  );
};

export default Characters;
