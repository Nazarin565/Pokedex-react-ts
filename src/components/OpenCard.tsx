import React from "react";

export const OpenCard = () => {
  return (
    <div className="border border-black p-2 flex flex-col gap-2 items-center">
      <img src="/favicon.ico" alt="pokemon" className="" />

      <h3 className="text-2xl">Charmander #004</h3>

      <table className="w-full text-center border-collapse">
        <tr>
          <th className="border border-black">Type</th>
          <th className="border border-black">Fire</th>
        </tr>
        <tr>
          <td className="border border-black">Attack</td>
          <td className="border border-black">52</td>
        </tr>
        <tr>
          <td className="border border-black">Defense</td>
          <td className="border border-black">43</td>
        </tr>
        <tr>
          <td className="border border-black">HP</td>
          <td className="border border-black">39</td>
        </tr>
        <tr>
          <td className="border border-black">SP Attack</td>
          <td className="border border-black">60</td>
        </tr>
        <tr>
          <td className="border border-black">SP Defense</td>
          <td className="border border-black">50</td>
        </tr>
        <tr>
          <td className="border border-black">Speed</td>
          <td className="border border-black">65</td>
        </tr>
        <tr>
          <td className="border border-black">Weight</td>
          <td className="border border-black">85</td>
        </tr>
        <tr>
          <td className="border border-black">Total moves</td>
          <td className="border border-black">89</td>
        </tr>
      </table>
    </div>
  );
};

/* <div className="border border-black p-2 flex flex-col flex-shrink-0 gap-1 items-center">
      <img
        src="/favicon.ico"
        alt="pokemon"
        className="w-32 h-32 object-contain bg-gray-400"
      />

      <h4 className="text-xl font-semibold">Bulbazar</h4>

      <div className="list-of-skills flex flex-wrap gap-1">
        <div className="text-sm border rounded-md p-px bg-green-400">Grass</div>
        <div className="text-sm border rounded-md p-px bg-purple-400">
          Poison
        </div>
        <div className="text-sm border rounded-md p-px bg-green-400">Grass</div>
        <div className="text-sm border rounded-md p-px bg-purple-400">
          Poison
        </div>
      </div>
    </div> */
