import { ICharacter } from '@/interfaces/character';
import { useCollapse } from 'react-collapsed';
import Highlighter from "react-highlight-words";
import Tags from '@/components/Characters/Tags';
import Image from "next/image";

type Props = {
  character: ICharacter;
  searchString: string|null;
};

const Card = ({ character, searchString } : Props) => {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  let textColorClass = 'text-gray-700 dark:text-gray-400';
  if ( character?.biography?.alignment == 'bad' ) {
    textColorClass = 'text-red-700';
  } else if ( character?.biography?.alignment == 'good' ) {
    textColorClass = 'text-blue-700 dark:text-white';
  }

  return (
    <div className="relative flex flex-col border border-neutral-300 dark:border-neutral-800 rounded-[0.8rem] overflow-hidden shadow-lg md:flex-row">

      {/* Button */}
      <button {...getToggleProps()} aria-expanded={isExpanded ? 'true' : 'false'} className="m-1 w-[2rem] h-[2rem] border border-gray-800 dark:border-white rounded-full text-gray-800 dark:text-white absolute right-[0] top-[12.5rem] md:top-0" aria-label={isExpanded ? 'Collapse ' + character.name + ' detail' : 'Expand ' + character.name + ' detail'}>
        {isExpanded ? '-' : '+'}
      </button>

      {/* Thumbnail */}
      <div className="basis-[12.5rem] grow-1 shrink-0 w-full h-[10rem] md:w-[12.5rem] md:h-[unset]">
        <Image
          src={character?.images?.lg}
          alt={character.slug}
          width={578}
          height={300}
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* Details */}
      <div className={`grow flex flex-col gap-[1.5rem] p-[2rem] ${textColorClass}`}>

        <div>
          <h2>
            {
              searchString
              ?
                <Highlighter
                  highlightClassName="bg-yellow-300"
                  searchWords={[searchString]}
                  autoEscape={true}
                  textToHighlight={character.name}
                />
              :
                character.name
            }
          </h2>
          {
            character.biography.fullName ?
              <p>Full Name: <span className="capitalize">{character.biography.fullName}</span></p>
            : <></>
          }
          {
            character.appearance.race ?
              <p>Race: <span className="capitalize">{character.appearance?.race}</span></p>
            : <></>
          }
          {
            character.biography.alignment ?
              <p>Alignment: <span className="capitalize">{character.biography.alignment}</span></p>
            : <></>
          }
          {
            character.biography.publisher ?
              <p>Publisher: <span className="capitalize">{character.biography.publisher}</span></p>
            : <></>
          }
        </div>

        {/* Collapse */}
        <div className="flex flex-col gap-[1rem]" {...getCollapseProps()}>

          {/* Powers */}
          <div>
            <h3>Powers:</h3>
            <ul role="list">
              {
                character.powerstats.intelligence ?
                  <li>
                    <span className="capitalize">Intelligence</span> : { character.powerstats.intelligence }
                  </li>
                : <></>
              }
              {
                character.powerstats.strength ?
                  <li>
                    <span className="capitalize">Strength</span> : { character.powerstats.strength }
                  </li>
                : <></>
              }
              {
                character.powerstats.speed ?
                  <li>
                    <span className="capitalize">Speed</span> : { character.powerstats.speed }
                  </li>
                : <></>
              }
              {
                character.powerstats.durability ?
                  <li>
                    <span className="capitalize">Durability</span> : { character.powerstats.durability }
                  </li>
                : <></>
              }
              {
                character.powerstats.power ?
                  <li>
                    <span className="capitalize">Power</span> : { character.powerstats.power }
                  </li>
                : <></>
              }
              {
                character.powerstats.combat ?
                  <li>
                    <span className="capitalize">Combat</span> : { character.powerstats.combat }
                  </li>
                : <></>
              }
            </ul>
          </div>

          {/* Tags */}
          <Tags characterID={character.id} characterTags={character.tags ? character.tags : null}/>
        </div>

      </div>
    </div>
  );
};

export default Card;
