const API_KEY = '4fac81442e49a0849060733bebb2ac8a';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json()
  return json
}


export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/tv/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/tv/top_rated?&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'animation',
        title: 'Animação',
        items: await basicFetch(`/discover/tv?with_genres=16&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'adventure',
        title: 'Ação e Aventura',
        items: await basicFetch(`/discover/tv?with_genres=10759&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'kids',
        title: 'Infantil',
        items: await basicFetch(`/discover/tv?with_genres=10762&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'reality',
        title: 'Reality',
        items: await basicFetch(`/discover/tv?with_genres=10764&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'scifi&fantasy',
        title: 'Sci-Fi & Fantasia',
        items: await basicFetch(`/discover/tv?with_genres=10765&language=pt-BR&api_key=${API_KEY}`)
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {}

    if (movieId) {
      switch (type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
          break;
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)

          break;
      }
    }

    return info
  }
}