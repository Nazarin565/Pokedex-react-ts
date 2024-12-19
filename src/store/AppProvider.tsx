import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { FullPokemonData, Pokemon } from "../types/Pokemons";
import { getDetailsAboutPokemon, getListOfPokemons } from "../api/pokeapi.ts";

type AppType = {
  pokemons: Pokemon[];
  selectedPokemon: Pokemon | null;
  handleLoadMorePokemons: () => void;
  handleSelectPokemon: (pokemon: Pokemon) => void;
  loading: boolean;
};

export const AppContext = createContext<AppType>({
  pokemons: [],
  selectedPokemon: null,
  handleLoadMorePokemons: () => {},
  handleSelectPokemon: () => {},
  loading: false,
});

type Props = {
  children: ReactNode;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextLink, setNextLink] = useState("");

  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchPokemons = useCallback((maxId: number = 0, link?: string) => {
    setLoading(true);
    getListOfPokemons(link && link).then((data) => {
      data.results.forEach((item: Pokemon, index: number) => {
        getDetailsAboutPokemon(maxId + index + 1)
          .then((details: FullPokemonData) => {
            // **FOR THIS APP WE DON'T NEED TO USE THE ENTIRE OBJECT, SO WE DON'T SAVE THE WHOLE OBJECT IN THE STATE
            const updatedPokemon = {
              ...item,
              id: maxId + index + 1,
              img: details.sprites.front_default || details.sprites.front_shiny,
              types: details.types,
              stats: details.stats,
              weight: details.weight,
              movesLength: details.moves.length,
            };

            setPokemons((prev) => [...prev, updatedPokemon]);
          })
          .finally(() => setLoading(false));
      });

      setNextLink(data.next);
    });
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  const handleLoadMorePokemons = () => {
    const link = nextLink.split("v2/")[1];
    const maxId = pokemons.reduce(
      (max, val) => (val.id > max ? val.id : max),
      0
    );

    fetchPokemons(maxId, link);
  };

  const handleSelectPokemon = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <AppContext.Provider
      value={{
        pokemons,
        selectedPokemon,
        handleLoadMorePokemons,
        handleSelectPokemon,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
