import { ICharacter } from '@/interfaces/character';
import Card from '@/components/Characters/Card';

type Props = {
  characters: ICharacter[];
  searchString: string | null;
};

const List = ({ characters, searchString } : Props) => {

  return (
    <div className="flex flex-col gap-[1rem]">
      {
        characters.map( ( character: ICharacter ) => {
          return(
            <div key={ character.id }>
              <Card character={ character } searchString={ searchString }/>
            </div>
          )}
        )
      }
    </div>
  );
};

export default List;
