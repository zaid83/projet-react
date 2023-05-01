import axios from "axios";

// base url pour les requetes sur l'api
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
