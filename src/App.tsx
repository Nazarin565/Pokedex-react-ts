import React, { useContext, useState } from "react";
import { CardPreview } from "./components/CardPreview.tsx";
import { OpenCard } from "./components/OpenCard.tsx";
import { colorsForTypes } from "./assets/constants.ts";
import { AppContext } from "./store/AppProvider.tsx";

export const App = () => {
  const { pokemons, selectedPokemon, handleLoadMorePokemons } =
    useContext(AppContext);

  const [filterValue, setFilterValue] = useState<string>("");

  const filteredData = filterValue
    ? pokemons.filter((item) =>
        item.types.some((type) => type.type.name === filterValue)
      )
    : pokemons;

  return (
    <div className="w-full px-4">
      <h1 className="text-4xl my-10 mx-auto text-center border-2 border-black w-fit py-5 px-24">
        Pokedex
      </h1>

      <div className="flex gap-4">
        <div className="w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 mb-4">
          <select
            id="filter"
            defaultValue=""
            onChange={(e) => setFilterValue(e.target.value)}
            className="col-span-full w-1/2 bg-gray-500 rounded-md p-1 text-white font-bold"
          >
            <option value="">All</option>
            {Object.keys(colorsForTypes).map((type, index) => (
              <option value={type} key={index}>
                {type.slice(0, 1).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>

          {filteredData.map((item) => (
            <CardPreview key={item.id} item={item} />
          ))}

          <button
            type="button"
            className="text-2xl text-white font-bold py-2 bg-blue-400 col-span-full w-5/6 justify-self-center rounded-lg"
            onClick={handleLoadMorePokemons}
          >
            Load more
          </button>
        </div>

        <div className="w-1/2 flex justify-center">
          {selectedPokemon ? (
            <OpenCard selectedPokemon={selectedPokemon} />
          ) : (
            <p className="text-2xl italic">
              Select any pokemon to see his stats
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
