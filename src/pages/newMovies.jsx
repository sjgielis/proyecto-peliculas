import { URL_API, API_KEY } from "../utils/constants";
import { Typography } from "antd";
import MovieCatalogo from "../components/MovieCatalogo/MovieCatalogo";
import './helperStyles.sass';

const { Title } = Typography;

const NewMovies = () => {
  const url = `${URL_API}/movie/now_playing${API_KEY}&languaje=es-ES`;
  return (
    <div className="page">
      <Title className="__title">Últimos Lanzamientos</Title>
      <MovieCatalogo url={url} />
    </div>
  );
};

export default NewMovies;