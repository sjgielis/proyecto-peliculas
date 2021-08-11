import { URL_API, API_KEY } from "../utils/constants";
import MovieCatalogo from "../components/MovieCatalogo/MovieCatalogo";
import { Typography } from "antd";
import './helperStyles.sass';
const { Title } = Typography;


const Popular = () => {
  const url = `${URL_API}/movie/popular${API_KEY}&languaje=es-ES`;
  return (
    <div className="page">
      <Title className="__title">Películas Populares</Title>
      <MovieCatalogo url={url} />
    </div>
  );
};

export default Popular;