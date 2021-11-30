import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '2093c0a0e0msh976ec7bd1ad5291p147ebdjsn99994da96b8e' ,
    },
  });
    
  return data;
}