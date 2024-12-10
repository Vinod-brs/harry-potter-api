import axios from 'axios';

const BaseURL = "https://hp-api.onrender.com/api/characters";

export const HttpGet = async() => {
  let oResponse = await axios.get(BaseURL);
  return oResponse?.data;
}