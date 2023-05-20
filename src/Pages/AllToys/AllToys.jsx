import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState(null);
  useEffect(() => {
    const fetchFunction = async () => {
      const fetchData = await fetch(
        "https://toy-bikroy-server.vercel.app/toys"
      );
      const data = await fetchData.json();
      setToys(data);
    };

    fetchFunction();
  }, []);

  if (!toys) {
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
                console.log(data.toyName);
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
