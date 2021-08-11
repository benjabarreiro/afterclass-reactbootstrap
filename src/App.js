import "./App.css";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CarouselComponent from "./components/Carousel";
import ButtonGroupComponent from "./components/Button";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselComponent />
      <Button>Boton Bootstrap</Button>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <ButtonGroupComponent />
    </div>
  );
}

export default App;
