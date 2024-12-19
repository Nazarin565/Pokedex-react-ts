import React from "react";
import { Pokemon } from "../types/Pokemons";

type Props = {
  selectedPokemon: Pokemon;
};

export const OpenCard: React.FC<Props> = ({ selectedPokemon }) => {
  return (
    <div className="border border-black p-3 flex flex-col gap-2 items-center h-fit sticky top-1">
      <img
        src={selectedPokemon.img}
        alt={selectedPokemon.name}
        className="w-96 object-cover bg-slate-100"
      />

      <h3 className="text-2xl capitalize">{selectedPokemon.name}</h3>

      <table className="w-full text-center border-collapse">
        <thead>
          <tr>
            <th className="border border-black">Type</th>
            <th className="border border-black">Fire</th>
          </tr>
        </thead>
        <tbody>
          {selectedPokemon.stats.map((item, index) => (
            <tr key={index}>
              <td className="border border-black capitalize">
                {item.stat.name}
              </td>
              <td className="border border-black">{item.base_stat}</td>
            </tr>
          ))}
          <tr>
            <td className="border border-black">Weight</td>
            <td className="border border-black">{selectedPokemon.weight}</td>
          </tr>
          <tr>
            <td className="border border-black">Total moves</td>
            <td className="border border-black">
              {selectedPokemon.movesLength}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
