import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import ImgGallery from "../ImgGallery/ImgGallery";
import Popular from "../Popular/Popular";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <ImgGallery></ImgGallery>
      <Category></Category>

      <Popular></Popular>
      <Contact></Contact>
    </div>
  );
};

export default Home;
