const API_key = "67f774b0833b55a6e223a5d8d95a6366";

const requests = {
  fetchLatestMovies: `/movie/latest?api_key=${API_key}&language=en-US`,
  fetchLatestSeries: `/tv/top_rated?api_key=${API_key}&language=en-US&page=1`,
  fetchTopMovies: `/movie/top_rated?api_key=${API_key}&language=en-US&page=1`,
  fetchTopSeries: `/tv/top_rated?api_key=${API_key}&language=en-US&page=1`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=${API_key}&language=en-US&page=1`,
  fetchTrending: `/trending/all/day?api_key=${API_key}`,
};

export default requests;
