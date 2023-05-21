import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState(null);
  const [loading, setLoading] = useState(true);
  useTitle("All Toys");

  useEffect(() => {
    const fetchFunction = async () => {
      const fetchData = await fetch(
        "https://toy-bikroy-server.vercel.app/toys"
      );
      const data = await fetchData.json();
      setToys(data);
      setLoading(false);
    };

    fetchFunction();
  }, []);

  const searchHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    const fieldValue = event.target.searchValue.value;
    const trimmedData = fieldValue.trim();

    fetch(`https://toy-bikroy-server.vercel.app/toys/${trimmedData}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!toys || loading) {
    return (
      <div className="text-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className=" mx-auto px-5 py-2 lg:px-16 lg:pt-12 pb-6">
      <h2 className="text-[#643843] text-4xl font-semibold mb-4 text-center">
        All Toys
      </h2>
      <div>
        <form
          onSubmit={searchHandler}
          className="flex items-center justify-center lg:justify-end mb-4"
        >
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Toy Name"
                name="searchValue"
                className="input input-bordered"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((data) => {
                return (
                  <tr key={data._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={data.toyPhotoUrl} alt={data.toyName} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{data.sellerName}</td>
                    <td>{data.toyName}</td>
                    <td>{data.toyCategory}</td>
                    <td>{data.toyPrice}</td>
                    <td>{data.availableQuantity}</td>
                    <th>
                      <Link to={`/toyDetails/${data._id}`}>
                        <button className="border px-2 py-1 rounded mx-2  bg-[#643843] text-[#E7CBCB] hover:bg-[#472D2D] ">
                          DETAILS
                        </button>
                      </Link>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
