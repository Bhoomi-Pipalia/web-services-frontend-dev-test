export interface ICharacter {
  id: number;
  name: string;
  slug: string;
  powerstats: ICharacterPowerstats;
  appearance: ICharacterAppearance;
  biography: ICharacterBiography;
  work : ICharacterWork;
  connections: ICharacterConnections;
  images: ICharacterImages;
  tags?: string[] | null;
};

export interface ICharacterPowerstats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
};

export interface ICharacterAppearance {
  gender: string;
  race: string,
  height: [
    string,
    string
  ];
  weight: [
    string,
    string
  ];
  eyeColor: string;
  hairColor: string;
};

export interface ICharacterBiography {
  fullName: string;
  alterEgos: string;
  aliases: [ string ];
  placeOfBirth: [ string ];
  firstAppearance: string;
  publisher: string;
  alignment: string;
};

export interface ICharacterWork {
  occupation: string;
  base: string
}

export interface ICharacterConnections {
  groupAffiliation: string;
  relatives: string;
}

export interface ICharacterImages {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}
