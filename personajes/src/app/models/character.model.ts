export interface CharacterResponse {
  items: Character[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface Character {
  id?: number;
  name: string;
  race: string;
  gender: string;
  image: string;
  affiliation: string;
  muerto?: boolean;
}