import React from "react";
import { CardPreview } from "./components/CardPreview.tsx";
import { OpenCard } from "./components/OpenCard.tsx";

export const App = () => {
  return (
    <div className="w-full px-4">
      <h1 className="text-4xl my-10 mx-auto text-center border-2 border-black w-fit py-5 px-24">
        Pokedex
      </h1>

      <div className="flex gap-4 items-center">
        <div className="w-1/2 grid grid-cols-3 gap-2">
          <CardPreview />
          <CardPreview />
          <CardPreview />
          <CardPreview />
          <CardPreview />
          <CardPreview />
          <CardPreview />
          <CardPreview />
          <CardPreview />
          <CardPreview />
          <CardPreview />
          <CardPreview />

          <button
            type="button"
            className="text-2xl text-white font-bold py-2 bg-blue-400 col-span-full w-5/6 justify-self-center rounded-lg"
          >
            Load more
          </button>
        </div>

        <div className="border-green-500 w-1/2 flex justify-center items-center">
          <OpenCard />
        </div>
      </div>
    </div>
  );
};
