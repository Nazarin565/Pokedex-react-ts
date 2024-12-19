export interface Pokemon {
  id: number;
  name: string;
  url: string;
  img: string;
  types: PokemonType[];
  stats: PokemonStats[];
  weight: number;
  movesLength: number;
}

export interface FullPokemonData {
  abilities: any[];
  base_experience: number;
  cries: any;
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_abilities: any[];
  past_types: any[];
  species: any;
  sprites: Sprites;
  stats: PokemonStats[];
  types: PokemonType[];
  weight: number;
}

export interface PokemonType {
  slot: number;
  type: PokemonTypeName;
}

export interface PokemonTypeName {
  name: string;
  url: string;
}

export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: StatDescription;
}

export interface StatDescription {
  name: string;
  url: string;
}

export interface Sprites {
  front_default: string;
  front_shiny: string;
}
