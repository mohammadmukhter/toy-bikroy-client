import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { AuthContext } from "../../provider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetcher = async () => {
      const fetchedData = await fetch(
        `https://toy-bikroy-server.vercel.app/myToys?email=${user.email}`
      );
      const data = await fetchedData.json();

      if (data) {
        setMyToys(data);
      } else {
        setMyToys([]);
      }
      setLoading(false);
    };
    dataFetcher();
  }, [user.email]);

  const sortHandler = (event) => {
    setLoading(true);

    const filterMethod = parseInt(event.target.value);

    fetch(
      `https://toy-bikroy-server.vercel.app/myToys?email=${user.email}&filter=${filterMethod}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const deleteHandler = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to leave this page?",
      icon: "warning",
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://toy-bikroy-server.vercel.app/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              {
                toast.success("Toy Data Deleted Successfully", {
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
              const fData = myToys.filter((x) => x._id !== id);
              setMyToys(fData);
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  if (!myToys || loading) {
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
        My Toys
      </h2>
      <div>
        <div className="flex justify-center lg:justify-end mb-4">
          <select
            onClick={sortHandler}
            className="select select-error w-full max-w-xs"
          >
            <option disabled defaultValue="" selected>
              Sort by price
            </option>
            <option value="1">Ascending Order</option>
            <option value="-1">Descending Order</option>
          </select>
        </div>
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
              {myToys.length <= 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center text-red-600 font-semibold"
                  >
                    <div>No Data Found!</div>
                  </td>
                </tr>
              ) : (
                myToys.map((data) => {
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
                        <Link to="/updateToy" state={{ toyData: data }}>
                          <button className="border px-2 py-1 rounded mx-2  bg-[#643843] text-[#E7CBCB] hover:bg-[#472D2D] ">
                            Update
                          </button>
                        </Link>
                        <button
                          onClick={() => deleteHandler(data._id)}
                          className="border px-2 py-1 font-bold rounded  bg-red-600 text-[#E7CBCB] hover:bg-red-800"
                        >
                          X
                        </button>
                      </th>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
