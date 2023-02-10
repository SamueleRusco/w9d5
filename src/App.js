import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardList from "./Components/CardList";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import NavBarTVShows from "./Components/NavBarTVShows";

function App() {
  return (
    <div className="App">
      <NavBar />
      <NavBarTVShows />
      <h4>Trending Now</h4>
      <CardList query={"Harry Potter"} />
      <h4>Watch it Again</h4>
      <CardList query={"james bond"} />
      <h4>New Release</h4>
      <CardList query={"the lord of the rings"} />
      <Footer />
    </div>
  );
}

export default App;
