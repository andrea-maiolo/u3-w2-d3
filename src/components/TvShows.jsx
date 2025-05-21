import ShowSection from "./ShowSection";

const TvShows = () => {
  return (
    <>
      <ShowSection title="Trending Now" query="narcos" />
      <ShowSection title="Watch It Again" query="vikings" />
      <ShowSection title="New Releases" query="the+office" />
    </>
  );
};

export default TvShows;
