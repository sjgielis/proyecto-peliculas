import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';
import "./SliderMovies.sass";
import Loading from "../Loading";
import { IMAGE_PATH } from "../../utils/constants";


const SliderMovies = ({moviesData}) => {
    console.log(moviesData);
  if(moviesData.loading || !moviesData.result){
    return <Loading />
  }

  const {results} = moviesData.result;
  return (
    <div>
      <Carousel autoplay >
        {results.map(movie =>(
          <Movie movie={movie} key={movie.id} />
        ))
        
        }
      </Carousel>
      ,
    </div>
  );
};

const Movie= ({movie: {id, backdrop_path: backdropPath, title, overview}}) =>{
  return ( <div
    className="slider__movie"
    style={{backgroundImage: `url("${IMAGE_PATH + backdropPath}")`}}
  >
    <div className="slider__movie-data            ">
      <div>
        <h2>{title}</h2>
        <p>{overview}</p>
        <Link to={`/movie/${id}`}>
          <Button type="primary">Ver mas... </Button>
        </Link>
      </div>
    </div>
  </div>)
}

export default SliderMovies;