import { useState, useEffect } from "react";
import { getAllUniqueTags } from '@/utils/CharactersLocalStorage';

interface IProps {
  onSearchFilter: ( search : string ) => void
  onTagFilter: ( tag : string ) => void
}

const FilterBar = ( props : IProps ) => {

  const [tags, setTags] = useState< string[] | null >();
  const [activeTag, setActiveTag] = useState("");

  // Update tags on local storage change.
  useEffect(() => {

    setTags( getAllUniqueTags() );

    const listenStorageChange = () => {
      setTags(getAllUniqueTags());
    }
    window.addEventListener("storage", listenStorageChange);
  }, []);

  const handleClick = ( event: React.SyntheticEvent, tag:string ) => {
    event.preventDefault();
    props.onTagFilter(activeTag != tag ? tag : '');
    setActiveTag(activeTag != tag ? tag : '');
  };

  return (
  <div className="flex flex-col gap-[1rem]">
    <input
      type="text"
      name="s"
      aria-label="Search by Name"
      placeholder="Search by Name"
      className="border border-gray-300 rounded-[0.4rem] p-3 w-full"
      onChange={
        e => props.onSearchFilter( e.target.value )
      }/>

      {
        tags
        ?
        <div className="flex flex-wrap gap-[1rem]">
          {
            tags.map( (tag, i ) => {
              return <div tabIndex={0} key={i} onClick={(e) => handleClick( e, tag )} className={'cursor-pointer px-3 py-1 rounded-[0.5rem]' + ( activeTag == tag ? ' bg-green-800 text-white' : ' bg-black dark:bg-white text-white dark:text-black' ) + ' transition-all hover:bg-green-800 hover:text-white' }>{tag}</div>
            })
          }
        </div>
        : <></>
      }
    </div>
  )
}

export default FilterBar;
