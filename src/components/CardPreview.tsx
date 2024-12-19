import React, { useContext } from "react";
import { Pokemon } from "../types/Pokemons";
import classNames from "classnames";
import { colorsForTypes } from "../assets/constants.ts";
import { AppContext } from "../store/AppProvider.tsx";

type Props = {
  item: Pokemon;
};

export const CardPreview: React.FC<Props> = ({ item }) => {
  const { selectedPokemon, handleSelectPokemon } = useContext(AppContext);

  return (
    <button
      onClick={() => handleSelectPokemon(item)}
      className={classNames(
        "border border-black p-2 flex flex-col flex-shrink-0 gap-1 items-center cursor-pointer hover:bg-slate-300",
        {
          "bg-slate-300":
            selectedPokemon && item.id === Number(selectedPokemon.id),
        }
      )}
    >
      <img
        src={item.img}
        alt="pokemon"
        className="w-32 h-32 object-contain bg-gray-300"
      />

      <h4 className="text-xl font-semibold capitalize">{item.name}</h4>

      <div className="list-of-skills flex flex-wrap gap-1">
        {item.types.map((item) => (
          <div
            key={item.slot}
            className={`text-sm border rounded-md py-0.5 px-1.5 capitalize ${
              colorsForTypes[item.type.name]
            }`}
          >
            {item.type.name}
          </div>
        ))}
      </div>
    </button>
  );
};
