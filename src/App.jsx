import { Container } from "react-bootstrap";
import "./App.css";
import FilterSearch from "./components/FilterSearch";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import PaginaProfilo from "./components/PaginaProfilo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainSection from "./components/MainSection";
import TvShows from "./components/TvShows";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Container fluid className="px-4">
        <FilterSearch />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/profile" element={<PaginaProfilo />} />
          <Route path="/tv-shows" element={<TvShows />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
