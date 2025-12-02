import axios from 'axios';
import fs from 'fs';
import dotenv from 'dotenv'
dotenv.config();

const BASE_URL = "https://api.themoviedb.org/3";

async function fetchData(endpoint) {
    const url = `${BASE_URL}${endpoint}?language=vi-VN`;
    const respone = await axios.get(url, {
        headers: {
                Authorization: `Bearer ${process.env.TMDB_READ_TOKEN}`,
                "Content-Type": "application/json"
        }
    });
    return respone.data;
};


async function main() {

    console.log("Fetching TMDB data...");

    const nowPlaying = await fetchData("/movie/now_playing");
    const upComing = await fetchData("/movie/upcoming");
    const popular = await fetchData("/movie/popular");
    const topRated = await fetchData("movie/top_rated");
    const genres = await fetchData("/genre/movie/list");

    const data = {
        fetched_at: new Date().toISOString(),
        now_playing: nowPlaying.results,
        upcoming: upComing.results,
        popular: popular.results,
        top_rated: topRated.results,
        genres: genres.genres
    };

    fs.writeFileSync("public/tmdb-data.json", JSON.stringify(data, null, 2));

    console.log("Done! File saved to public/tmdb-data.json");
}

main().catch(err => console.error(err));