import g1 from "../../../assets/gallery1.jpg";
import g2 from "../../../assets/gallery2.jpg";
import g3 from "../../../assets/gallery3.jpg";
import g4 from "../../../assets/gallery4.jpg";
import g5 from "../../../assets/gallery5.jpg";
import g6 from "../../../assets/gallery6.jpg";

const ImgGallery = () => {
  return (
    <div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <h2 className="text-6xl font-bold text-[#643843] text-center mb-8 mt-12">
          Toys Gallery
        </h2>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div
              className="w-1/2 p-1 md:p-2"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-sm"
                src={g1}
              />
            </div>
            <div
              className="w-1/2 p-1 md:p-2"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-sm"
                src={g2}
              />
            </div>
            <div
              className="w-full p-1 md:p-2"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-sm"
                src={g5}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div
              className="w-full p-1 md:p-2"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-sm"
                src={g6}
              />
            </div>
            <div
              className="w-1/2 p-1 md:p-2"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-sm"
                src={g4}
              />
            </div>
            <div
              className="w-1/2 p-1 md:p-2"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center shadow-sm"
                src={g3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgGallery;
