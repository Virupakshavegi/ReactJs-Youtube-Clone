import { Axios } from "axios";
import axios from "axios";
const URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  //   url: URL,
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
  },
  headers: {
    "X-RapidAPI-Key": "3dacc45e65mshd40e968d5f8042cp10e6cbjsn5d157c06b376",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    // "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
const APIFetching = async (url) => {
  const { data } = await axios.get(`${URL}/${url}`, options);
  return data;

  // try {
  //   const response = await axios.get(`${URL}/${url}`, options);
  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.log(error);
  // }
};

export default APIFetching;

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
