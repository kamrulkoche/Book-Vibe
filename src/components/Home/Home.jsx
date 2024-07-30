import { Helmet } from "react-helmet-async";
import Books from "../Books/Books";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home </title>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </Helmet>

      <Banner />
      <Books />
    </div>
  );
};

export default Home;
