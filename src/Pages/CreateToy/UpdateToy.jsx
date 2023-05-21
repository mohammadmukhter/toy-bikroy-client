import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useTitle("Update");

  const {
    _id,
    toyName,
    toyPhotoUrl,
    sellerEmail,
    sellerName,
    toyPrice,
    toyCategory,
    rating,
    availableQuantity,
    toyDetails,
  } = location.state.toyData;
  const formHandler = (event) => {
    event.preventDefault();
    const form = event.target;

    const toyPrice = parseInt(form.toy_price.value);
    const availableQuantity = parseInt(form.available_quantity.value);
    const toyDetails = form.toy_details.value;

    const toyUpdateFormData = {
      toyPrice,
      availableQuantity,
      toyDetails,
    };

    if (isNaN(toyPrice)) {
      alert("price must be number value");
    }

    if (isNaN(availableQuantity)) {
      alert("quantity must be number value");
    }

    if (!isNaN(toyPrice) && !isNaN(availableQuantity)) {
      fetch(`https://toy-bikroy-server.vercel.app/updateToy/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(toyUpdateFormData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            navigate("/myToys", { replace: true });
            {
              toast.success("Toy Data Updated Successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            }
            form.reset();
          }
        });
    }
  };
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <h2 className="text-[#643843] text-4xl font-semibold mb-4">
        Update Toy Information
      </h2>

      <div className="bg-[#E7CBCB]/30 py-8 px-4 rounded-md shadow-lg">
        <form onSubmit={formHandler}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                placeholder="Toy Name"
                defaultValue={toyName}
                name="toy_name"
                className="input w-full "
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Toy Photo URL"
                defaultValue={toyPhotoUrl}
                name="toy_photo_url"
                className="input w-full "
                disabled
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                defaultValue={sellerName}
                placeholder="Seller Name"
                name="seller_name"
                className="input w-full "
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                placeholder="Seller Email"
                defaultValue={sellerEmail}
                name="seller_email"
                className="input w-full "
                disabled
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Price</span>
              </label>
              <input
                type="text"
                placeholder="Toy Price"
                defaultValue={toyPrice}
                name="toy_price"
                className="input w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>

              <select
                name="toy_category"
                defaultValue={toyCategory}
                className="select select-bordered"
                disabled
              >
                <option value="" disabled>
                  Pick category
                </option>
                <option value="sports_car">Sports Car</option>
                <option value="regular_car">Regular Car</option>
                <option value="truck">Truck</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                defaultValue={rating}
                name="rating"
                className="input w-full "
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                placeholder="Available Quantity"
                defaultValue={availableQuantity}
                name="available_quantity"
                className="input w-full "
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Details</span>
            </label>
            <textarea
              className="textarea"
              placeholder="Toy Details"
              defaultValue={toyDetails}
              name="toy_details"
            ></textarea>
          </div>
          <div className="form-control my-4">
            <input
              className=" cursor-pointer px-2 py-1 rounded bg-[#643843] text-[#E7CBCB] hover:bg-[#472D2D] font-bold"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
