import axios from 'axios';

export const Base_url = 'https://youtube-v31.p.rapidapi.com';


const options = {
  params: { maxResults: '50' },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromApi = async url => {
  const { data } = await axios.get(`${Base_url}/${url}`, options);
  // console.log(data);
  return data;
};
