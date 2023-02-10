import { Component } from "react";
import { Row } from "react-bootstrap";
import CardNet from "./Cards";

class CardList extends Component {
  state = {
    searchResult: [],
  };

  fetchCompito = () => {
    fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=94ef9189&s=" +
        this.props.query
    )
      .then((response) => response.json())
      .then((data) => this.setState({ searchResult: data.Search }))
      .catch((e) => console.log(e));
  };

  // fetchCompito2 = async () => {
  //   try {
  //     const result = await fetch(
  //       "http://www.omdbapi.com/?i=tt3896198&apikey=94ef9189&s=" +
  //         this.props.query
  //     );
  //     const dati = await result.json();
  //     this.setState({ searchResult: dati.Search });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // fetchCompito = () => {
  //   fetch(
  //     "http://www.omdbapi.com/?i=tt3896198&apikey=94ef9189&s=" +
  //       this.props.query
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         response
  //           .json()
  //           .then((data) => {
  //             this.setState({ searchResult: data.Search });
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //           });
  //       } else {
  //         console.log("errore");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // fetchCompito = async () => {
  //   try {
  //     const fetchFunction = await fetch(
  //       "http://www.omdbapi.com/?i=tt3896198&apikey=94ef9189&s=" +
  //         this.props.query
  //     );
  //     if (fetchFunction.ok) {
  //       let data = await fetchFunction.json();

  //       this.setState({ searchResult: data.Search });
  //     } else {
  //       console.log("ciaooooo");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  componentDidMount = () => {
    this.fetchCompito();
  };

  render() {
    return (
      <>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
          {this.state.searchResult &&
            this.state.searchResult.map((film, i) => {
              if (i < 7) {
                return <CardNet key={film.imdbID} src={film.Poster} />;
              } else {
                return null;
              }
            })}
        </Row>
      </>
    );
    // <>
    // </>
  }
}
// this.state.harryPotter.search.forEach((film) => {
// });

export default CardList;
