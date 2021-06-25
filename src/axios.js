import axios from 'axios';

const apiURL = axios.create({
    baseURL : "https://api.themoviedb.org/3",
});

export default apiURL;

