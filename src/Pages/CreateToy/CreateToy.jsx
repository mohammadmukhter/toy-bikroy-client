import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

const CreateToy = () => {
  const { user } = useContext(AuthContext);
  const formHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toy_name.value;
    const toyPhotoUrl = form.toy_photo_url.value;
    const sellerName = form.seller_name.value;
    const sellerEmail = form.seller_email.value;
    const toyPrice = form.toy_price.value;
    const toyCategory = form.toy_category.value;
    const rating = form.rating.value;
    const availableQuantity = form.available_quantity.value;
    const toyDetails = form.toy_details.value;

    const toyFormData = {
      toyName,
      toyPhotoUrl,
      sellerName,
      sellerEmail,
      toyPrice,
      toyCategory,
      rating,
      availableQuantity,
      toyDetails,
    };

    console.log(toyFormData);

    fetch("https://toy-bikroy-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          {
            toast.success("Toy Data Inserted Successfully", {
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
        }
      });
  };
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <h2 className="text-[#643843] text-4xl font-semibold mb-4">Add A Toy</h2>

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
                name="toy_name"
                className="input w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Toy Photo URL"
                name="toy_photo_url"
                className="input w-full "
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
                defaultValue={user.displayName}
                placeholder="Seller Name"
                name="seller_name"
                className="input w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                placeholder="Seller Email"
                defaultValue={user.email}
                name="seller_email"
                className="input w-full "
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
                name="toy_price"
                className="input w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>

              <select name="toy_category" className="select select-bordered">
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
                name="rating"
                className="input w-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                placeholder="Available Quantity"
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
              name="toy_details"
            ></textarea>
          </div>
          <div className="form-control my-4">
            <input
              className=" cursor-pointer px-2 py-1 rounded bg-[#643843] text-[#E7CBCB] hover:bg-[#472D2D] font-bold"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateToy;
