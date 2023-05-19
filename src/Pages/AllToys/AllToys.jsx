import { useEffect, useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    const fetchFunction = async () => {
      const fetchData = await fetch("http://localhost:5000/toys");
      const data = await fetchData.json();
      setToys(data);
    };

    fetchFunction();
  }, []);

  return (
    <div className="container mx-auto px-5 py-2 lg:px-16 lg:pt-12 pb-6">
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
                      <button className="border px-2 py-1 rounded mx-2  bg-[#643843] text-[#E7CBCB] hover:bg-[#472D2D] ">
                        DETAILS
                      </button>
                      <button className="border px-2 py-1 font-bold rounded  bg-red-600 text-[#E7CBCB] hover:bg-red-800">
                        X
                      </button>
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