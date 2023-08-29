import axios from "axios";


const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTQxZmRiYzYyM2YxMzJmYWNlNGQ4OGMxOTQ3N2JlZSIsInN1YiI6IjY0ZTgzYTNmNTI1OGFlMDBjOTRiZjk3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7wHaO4pjaFmFXNt6oTtdfDp-yciFb8NPzTlymz5-6os";
;
const KEY = "?api_key=a541fdbc623f132face4d88c19477bee";


const headers = {
    Authorization: "bearer" + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url,params) => {
    try{
      const {data} = await axios.get (BASE_URL + url + KEY, {
        header: headers,
        params: params,
      })
      return data; 
    } catch (err){
        console.log(err);
        return err;

    }
}





