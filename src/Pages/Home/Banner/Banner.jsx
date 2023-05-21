import banner1 from "../../../assets/banner1.jpg";
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen relative"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-left text-neutral-content absolute left-0 top-50">
          <div className="max-w-md">
            <h1
              className="mb-5 text-5xl font-bold"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Where Every Child's Dream Comes True!
            </h1>
            <p className="mb-5">
              Unlocking Joy and Wonder for Kids Everywhere!
            </p>
            <button className="btn bg-[#643843] text-[#E7CBCB] border-0 hover:bg-[#472D2D] ">
              Purchase Your Toy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
