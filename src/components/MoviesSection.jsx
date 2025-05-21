import { Component } from "react";
import { Row, Col, Container, Image, Spinner, Alert } from "react-bootstrap";

class MoviesSection extends Component {
  state = {
    movieArray: [],
    loaded: false,
    errore: false,
    erroreMess: "",
  };

  componentDidMount() {
    this.setState({ loaded: !this.state.loaded });
    this.fetchMovies();
  }

  fetchMovies = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=21e645cf&s=${this.props.query}`);
      const data = await response.json();

      if (data.Response === "False") {
        this.setState({ errore: true });
        this.setState({ erroreMess: data.Error });
        this.setState({ loaded: !this.state.loaded });
      } else {
        this.setState({ loaded: !this.state.loaded });
        this.setState({ movieArray: data.Search });
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  render() {
    return (
      <>
        {this.state.loaded && (
          <div className="d-flex justify-content-center my-3">
            <Spinner animation="border" role="status" className="text-primary"></Spinner>
          </div>
        )}
        {this.state.errore && (
          <div>
            <Alert variant="darnger" className="bg-danger text-white">
              Stai vedendo questo alert perche {this.state.erroreMess}
            </Alert>
          </div>
        )}
        {!this.state.loaded && !this.state.errore && (
          <>
            <h4 className="text-white mb-2">{this.props.title}</h4>
            <Row xs={1} sm={2} lg={4} xl={6} className="mb-4">
              {this.state.movieArray.slice(0, 6).map((movie) => (
                <Col key={movie.imdbID} className="mb-2 text-center px-1">
                  <Image src={movie.Poster} alt={movie.Title} className="img-fluid w-100 poster-img" />
                </Col>
              ))}
            </Row>
          </>
        )}
      </>
    );
  }
}

export default MoviesSection;
