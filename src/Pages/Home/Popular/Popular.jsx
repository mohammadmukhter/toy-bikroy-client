import test2 from "../../../assets/gallery1.jpg";
import test3 from "../../../assets/gallery3.jpg";
import test4 from "../../../assets/gallery4.jpg";
import test from "../../../assets/gallery5.jpg";
import test5 from "../../../assets/gallery6.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./swiper.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Popular = () => {
  return (
    <div className="container mx-auto mb-8 px-5 py-2 lg:px-18 lg:pt-24">
      <div>
        <h2 className="text-6xl font-bold text-[#643843] text-center mb-8 mt-12">
          Our Popular Toys
        </h2>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 shadow-xl image-full">
              <figure>
                <img className="w-full" src={test} alt="car" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Drum vehicle</h2>
                <p className="text-left">mini drum toy vehicle</p>
                <div className="card-actions justify-end">
                  <button className=" px-2 py-1 rounded bg-[#643843] text-[#E7CBCB] hover:bg-[#472D2D] font-bold">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 shadow-xl image-full">
              <figure>
                <img className="w-full" src={test5} alt="car" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Blue Sport Car</h2>
                <p className="text-left">mini Blue Sport Car</p>
                <div className="card-actions justify-end">
                  <button className=" px-2 py-1 rounded bg-[#643843] text-[#E7CBCB] hover:bg-[#472D2D] font-bold">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 shadow-xl image-full">
              <figure>
                <img src={test2} alt="car" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Mini Toy Car</h2>
                <p className="text-left">Red Toy car for child</p>
                <div className="card-actions justify-end">
                  <button className=" px-2 py-1 rounded bg-[#643843] text-[#E7CBCB] hover:bg-[#472D2D] font-bold">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 shadow-xl image-full">
              <figure>
                <img src={test3} alt="car" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Yellow Taxi</h2>
                <p className="text-left">Taxi toy Car for baby</p>
                <div className="card-actions justify-end">
                  <button className=" px-2 py-1 rounded bg-[#643843] text-[#E7CBCB] hover:bg-[#472D2D] font-bold">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 shadow-xl image-full">
              <figure>
                <img src={test4} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Black Sedan Car</h2>
                <p className="text-left">Black Sedan Mini Toy Car</p>
                <div className="card-actions justify-end">
                  <button className=" px-2 py-1 rounded bg-[#643843] text-[#E7CBCB] hover:bg-[#472D2D] font-bold">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Popular;
