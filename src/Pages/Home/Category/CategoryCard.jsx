import { Link } from "react-router-dom";

const CategoryCard = ({ toy }) => {
  const { _id, toyName, toyPhotoUrl, toyPrice, rating } = toy;
  return (
    <div className="card w-full bg-base-100 shadow-xl border border-[#E7CBCB] my-4">
      <figure className="px-2 py-2">
        <img
          src={toyPhotoUrl}
          alt={toyName}
          className="rounded-xl h:auto lg:h-40 w-full"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="500"
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title">{toyName}</h2>
        <p className="text-[#382127]">
          Price:
          <span className="text-[#6d5e62] text-2xl font-bold">
            {" "}
            ${toyPrice}
          </span>
        </p>
        <p className="text-[#382127]">
          Rating:
          <span className="text-[#6d5e62] text-2xl font-bold"> {rating}</span>
        </p>
        <div className="card-actions mx-auto">
          <Link to={`/toyDetails/${_id}`}>
            <button className=" px-2 py-1 rounded-md bg-[#643843] text-[#E7CBCB] hover:bg-[#472D2D]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
