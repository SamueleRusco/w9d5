import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardList from "./Components/CardList";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import NavBarTVShows from "./Components/NavBarTVShows";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/TVShows" element={<NavBarTVShows />} />
          <Route
            path="/TrendingNow"
            element={<CardList query={"Harry Potter"} />}
          />
          <Route
            path="/WatchItAgain"
            element={<CardList query={"james bond"} />}
          />
          <Route
            path="/TheLordOfTheRings"
            element={<CardList query={"the lord of the rings"} />}
          />
          <Route path="/movie-details/:movieID" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// {
//   /*
//       <NavBarTVShows />
//       <h4>Trending Now</h4>
//       <CardList query={"Harry Potter"} />
//       <h4>Watch it Again</h4>
//       <CardList query={"james bond"} />
//       <h4>New Release</h4>
//       <CardList query={"the lord of the rings"} />
//       <Footer /> */
// }
