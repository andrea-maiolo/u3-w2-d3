import MoviesSection from "./MoviesSection";

const MainSection = () => {
  return (
    <>
      <MoviesSection title="Trending Now" query="avengers" />
      <MoviesSection title="Watch It Again" query="batman" />
      <MoviesSection title="New Releases" query="star+wars" />
    </>
  );
};

export default MainSection;
