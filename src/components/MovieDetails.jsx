import { useEffect, useState } from "react";
import { Container, Image, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();

  const [movieDetail, setMovieDetail] = useState(null);

  const fetchDetail = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=21e645cf&i=${params.movieId}`);

      if (!response.ok) {
        throw new Error("errore nella fetch");
      } else {
        const data = await response.json();
        console.log(data);
        setMovieDetail(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <Container>
      {movieDetail ? (
        <Row className="justify-content-center">
          <h2 className="text-white mb-2">{movieDetail.Title}</h2>
          <p className="text-white">Plot: {movieDetail.Plot}</p>
          <ul>
            {movieDetail.Ratings.map((rating) => {
              return (
                <li className="text-white" key={rating.Value}>
                  {rating.Source} : {rating.Value}
                </li>
              );
            })}
          </ul>
          <Image src={movieDetail.Poster} alt={movieDetail.Title} className="img-fluid w-75" />
        </Row>
      ) : (
        <Row className="justify-content-center">
          <Spinner animation="border" role="status" variant="info"></Spinner>
        </Row>
      )}
    </Container>
  );
};

export default MovieDetails;
