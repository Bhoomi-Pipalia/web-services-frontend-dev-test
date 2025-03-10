import { setLocalStorage, getLocalStorage } from '@/utils/LocalStorage';
import { ICharacter } from '@/interfaces/character';

const LocalStorageKey = "characters";

/**
 * Set characters to local storage.
 *
 * @param {object} characters characters to store.
 */
export const storeCharacters = ( characters: ICharacter[] ) : void => {
  setLocalStorage( LocalStorageKey, characters );
};

/**
 * Get characters from local storage.
 *
 * @return {object | null} stored characters.
 */
export const getStoredCharacters = () : ICharacter[] | null => {
  return getLocalStorage( LocalStorageKey );
};

/**
 * Update characters local storage.
 *
 * @param {number} ID characters ID.
 * @return {array | null} tags to update.
 */
export const updateStoredCharacterTags = ( ID : number, tags : string[] ) : void => {

  let tagsObject = {
    'tags' : tags
  }

  let storedCharacters = getStoredCharacters();

  if ( storedCharacters ) {

    let updatedCharacters = storedCharacters.map( ( character : ICharacter ) => {
      return character.id === ID ? Object.assign({}, character, tagsObject) : character
    });

    storeCharacters(updatedCharacters);
  }
};

/**
 * Get all unique tags from local storage data.
 *
 * @return {array | null} Tags from storage.
 */
export const getAllUniqueTags = () => {

  let storedCharacters = getStoredCharacters();

  let allUniqueTags;

  if ( storedCharacters ) {

    var temp : string[][] = [];

    storedCharacters.forEach((character) => {
      if(character.tags) {
        temp.push(character.tags);
      }
    });

    if( temp ) {
      allUniqueTags =  [...new Set( [].concat( ...temp as [] ) )];
    }

    if ( allUniqueTags ) {
      allUniqueTags.sort();
    }
  }

  return allUniqueTags;
}
