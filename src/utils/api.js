import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";


const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};



export const fetchDataFromApi = async (url) => {
    console.log("before call")
    const { data } = await axios.request(`${BASE_URL}/${url}`, options);
    console.log("data ki value",data)
    return data;
};
