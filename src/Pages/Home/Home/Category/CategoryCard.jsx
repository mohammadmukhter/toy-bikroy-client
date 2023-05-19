const CategoryCard = ({ toy }) => {
  const { toyName, toyPhotoUrl, toyPrice, rating } = toy;
  return (
    <div className="card w-full bg-base-100 shadow-xl border border-[#E7CBCB] my-4">
      <figure className="px-2 py-2">
        <img
          src={toyPhotoUrl}
          alt={toyName}
          className="rounded-xl h-32 w-full"
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title">{toyName}</h2>
        <p>Price:{toyPrice}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions">
          <button className="px-2 py-1 rounded-md bg-[#643843] text-[#E7CBCB] hover:bg-[#472D2D]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
