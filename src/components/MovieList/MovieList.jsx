import "./MovieList.sass";
import Loading from "../Loading";
import { IMAGE_PATH } from "../../utils/constants";
import { Link } from "react-router-dom";
import { List, Avatar, Button } from "antd";
import { PlayCircleOutlined } from '@ant-design/icons';

const MovieList = ({ title, moviesData }) => {
  if (moviesData.Loading || !moviesData.result) {
    return <Loading />;
  }

  return (
    <List
      className="list"
      size="default"
      header={<h2>{title}</h2>}
      bordered
      dataSource={moviesData.result.results}
      renderItem={(movie) => <RenderMovie movie={movie} />}
    ></List>
  );
};

const RenderMovie = ({ movie: { id, title, poster_path: posterPath } }) => {
  return (
    <List.Item className="list__item">
      <List.Item.Meta
        avatar={
          <Avatar src={`${IMAGE_PATH + posterPath}`} />
        }
        title={<Link to={`/movie/${id}`}>{title}</Link>}
      />
      <Link to={`/movie/${id}`}>
        <Button type="primary" shape="circle" icon={<PlayCircleOutlined />} />
      </Link>
    </List.Item>
  );
};

export default MovieList;