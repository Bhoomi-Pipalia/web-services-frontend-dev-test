import { ICharacter } from '@/interfaces/character';
import Image from "next/image";

type Props = {
  character: ICharacter;
};

const Card = ({ character } : Props) => {

  return (
    <>
      {/* Thumbnail */}
      <Image
        src={character?.images?.lg}
        alt={character.slug}
        width={200}
        height={200}
        className=""
      />

      {/* Details */}
      <h2>{ character.name }</h2>
      {
        character.biography.fullName ?
          <p>Full Name: {character.biography.fullName}</p>
        : <></>
      }
      {
        character.appearance.race ?
          <p>Race: {character.appearance?.race}</p>
        : <></>
      }
      {
        character.biography.alignment ?
          <p>Alignment: {character.biography.alignment}</p>
        : <></>
      }
      {
        character.biography.publisher ?
          <p>Publisher: {character.biography.publisher}</p>
        : <></>
      }
    </>
  );
};

export default Card;
