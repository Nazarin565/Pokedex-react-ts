import axios from "axios";

const client = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const getListOfPokemons = async (link: string = "pokemon/?limit=12") => {
  try {
    const response = await client.get(link);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getDetailsAboutPokemon = async (id: number) => {
  try {
    const response = await client.get(`pokemon/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
