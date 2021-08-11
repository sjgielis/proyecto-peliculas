import useFetch from "../hooks/useFetch";
import SliderMovies from "../components/SliderMovies";
import MovieList from "../components/MovieList";
import { URL_API, API_KEY } from "../utils/constants";
import { Row, Col } from "antd";

const Home = () => {
  const urlNewMovies = `${URL_API}/movie/now_playing${API_KEY}&language=es-ES&page=1`;
  const popularNewMovies = `${URL_API}/movie/popular${API_KEY}&language=es-ES&page=1`;
  const recommendedNewMovies = `${URL_API}/movie/top_rated${API_KEY}&language=es-ES&page=1`;
  const newMoviesData = useFetch(urlNewMovies);
  const popularMoviesData = useFetch(popularNewMovies);
  const recommendedMoviesData = useFetch(recommendedNewMovies);

  return (
    <div>
      <SliderMovies moviesData={newMoviesData} />
      <Row>
        <Col xs={24} sm={24} md={12}>
          <MovieList
            title="Peliculas Populares"
            moviesData={popularMoviesData}
          />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <MovieList
            title="Peliculas Mejor Puntadas"
            moviesData={recommendedMoviesData}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;