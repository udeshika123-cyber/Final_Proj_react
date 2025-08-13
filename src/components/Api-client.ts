import axios, { Axios } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cdca64c1672c40fba328225011c5d5d6",
  },
});
