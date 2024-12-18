import React from "react";

export const CardPreview = () => {
  return (
    <div className="border border-black p-2 flex flex-col flex-shrink-0 gap-1 items-center">
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
    </div>
  );
};
