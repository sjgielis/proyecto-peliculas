import { useParams } from "react-router-dom";
import { Col, Row, Button, Layout } from "antd";
import moment from "moment";
import { useState } from "react";
import { PlaySquareOutlined } from "@ant-design/icons";
import useFetch from "../../hooks/useFetch";
import "./movie.sass";
import Loading from "../../components/Loading";
import { URL_API, API_KEY, IMAGE_PATH } from "../../utils/constants";
import ModalVideo from "../../components/ModalVideo/ModalVideo";

const Movie = () => {
  const { id } = useParams();
  const urlData = `${URL_API}/movie/${id}${API_KEY}&language=es-ES`;
  const urlVideo = `${URL_API}/movie/${id}/videos${API_KEY}&language=en-EN`;
  const movieData = useFetch(urlData);
  console.log(movieData)
  const movieVideo = useFetch(urlVideo);

  if (movieData.loading || !movieData.result || !movieVideo.result) {
    return <Loading />;
  }
  if (movieVideo.result.results.length > 0) {
    const {
      result: {
        results: [videoData],
      },
    } = movieVideo;
    return <RenderMovie movieData={movieData} videoData={videoData} />;
  } else {
    return (
      <h1 className="provisory-title">No encontramos datos de esa película</h1>
    );
  }
};

const RenderMovie = ({ movieData: { result }, videoData }) => (
  <div
    className="movie"
    style={{ backgroundImage: `url('${IMAGE_PATH + result.backdrop_path}')` }}
  >

      <Row className="movie__dark">
        <Col xs={18} sm={18} md={8} offset={3} className="movie__poster">
          <PosterMovie image={IMAGE_PATH + result.poster_path} />
        </Col>
        <Col xs={24} sm={12} md={10} className="movie__info">
          <InfoMovie result={result} videoData={videoData} />
        </Col>
      </Row>
  </div>
);

const PosterMovie = ({ image }) => (
  <div style={{ backgroundImage: `url('${image}')` }}></div>
);

const InfoMovie = ({
  result: { title, release_date, genres, overview },
  videoData: { key, site },
}) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const openModal = () => setIsVisibleModal(true);
  const closeModal = () => setIsVisibleModal(false);

  const renderVideo = () => {
    if (key && site) {
      return (
        <div>
          <Button
            className="info__button"
            type="primary"
            icon={<PlaySquareOutlined />}
            onClick={openModal}
          >
            Ver Trailer
          </Button>
          <ModalVideo
            videoKey={key}
            videoPlatform={site}
            isOpen={isVisibleModal}
            close={closeModal}
          />
        </div>
      );
    }
  };
  return (
    <div className="info">
      <div>
        <h1 className="info__mainTitle">
          {title}
          <span> ~ {moment(release_date, "YYYY-MM-DD").format("YYYY")}</span>
        </h1>
        {renderVideo()}
      </div>
      <div>
        <h3 className="info__subTitle">General</h3>
        <p className="info__description">{overview}</p>
        <h3 className="info__subTitle">Generos</h3>
        <ul className="info__genres">
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movie;