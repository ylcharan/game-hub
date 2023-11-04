import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "f52201ada7bf4bedb7d0521a02bc82d4",
  },
});
