import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ImgGallery from "../ImgGallery/ImgGallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ImgGallery></ImgGallery>
      <Category></Category>
      <h2>This is home page</h2>
    </div>
  );
};

export default Home;
