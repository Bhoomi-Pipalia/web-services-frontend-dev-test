import { useState } from "react";
import { updateStoredCharacterTags } from '@/utils/CharactersLocalStorage';

type Props = {
  characterID: number;
  characterTags: string[] | null;
};

const Tags = ( { characterID, characterTags } : Props ) => {

  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState< string[] | null >(characterTags);

  // Add tag
  const onSubmit = async(event: React.SyntheticEvent) => {

    event.preventDefault();

    const target = event.target as typeof event.target & {
      tag: { value: string };
    };

    if ( target.tag.value ) {

      const tag = target.tag.value.toLowerCase();

      const tempTags = tags ? [ ...new Set( [...tags,  tag ] ) ] : [tag];

      setTags(tempTags);

      updateStoredCharacterTags(characterID, tempTags);

      setTagInput('');

      // Add event to add the tags in filter.
      window.dispatchEvent(new Event("storage"));
    }
  };

  // Remove tag
  const removeTag = ( tag : string ) => {
    if ( tags ) {
      const tempTags = tags.filter((e) => e !== tag);
      setTags(tempTags);
      updateStoredCharacterTags(characterID, tempTags);

      // Add event to remove the tags in filter.
      window.dispatchEvent(new Event("storage"));
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="flex align-items-center justify-between overflow-hidden border border-gray-500 rounded-[0.4rem] w-full">
        <input type="text" name="tag" placeholder="Add Tag" className="basis-[60%] max-w-[60%] grow-0 shrink-0 w-auto flex-grow placeholder-gray-500 text-gray-500 shrink p-3 focus:ring-1 focus:ring-blue-400" aria-label="Add Tag" value={tagInput} onChange={(e) => setTagInput(e.target.value)}/>
        <button type="submit" className="basis-[40%] max-w-[40%] grow-0 shrink-0 p-3 bg-gray-500 text-white focus:ring-blue-400">
          Add Tag
        </button>
      </form>

      {
        tags ?
        <ul className="flex flex-wrap w-full gap-[1rem]">
          {
            tags.map(( tag : string, index : number ) => (
              <li key={index} className="cursor-pointer flex align-items-center gap-[0.5rem] px-2 py-1 rounded-lg transition-all bg-gray-500 text-white hover:bg-gray-200 hover:text-gray-800">
                <span>{tag}</span>
                <button type="button" aria-label="Click to remove tag" onClick={() => removeTag(tag)} className="px-1 text-[1rem] cursor-pointer">X</button>
              </li>
            ))
          }
        </ul>
        :
        <></>
      }
    </>
  );
};

export default Tags;
