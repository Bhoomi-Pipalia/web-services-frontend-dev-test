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
