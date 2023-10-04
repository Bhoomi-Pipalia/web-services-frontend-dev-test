import { ICharacter } from '@/interfaces/character';
import Image from "next/image";

type Props = {
  character: ICharacter;
};

const Card = ({ character } : Props) => {

  let textColorClass = 'text-gray-700 dark:text-gray-400';
  if ( character?.biography?.alignment == 'bad' ) {
    textColorClass = 'text-red-700';
  } else if ( character?.biography?.alignment == 'good' ) {
    textColorClass = 'text-blue-700 dark:text-white';
  }

  return (
    <div className="relative flex flex-col border border-neutral-300 dark:border-neutral-800 rounded-[0.8rem] overflow-hidden shadow-lg md:flex-row">

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
          <h2>{ character.name }</h2>
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
      </div>
    </div>
  );
};

export default Card;
