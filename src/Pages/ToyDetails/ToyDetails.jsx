import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const loadedData = useLoaderData();

  const {
    toyName,
    toyCategory,
    sellerName,
    sellerEmail,
    toyPhotoUrl,
    toyPrice,
    rating,
    availableQuantity,
    toyDetails,
  } = loadedData[0];

  return (
    <div>
      <div className="max-w-2xl overflow-hidden bg-white  shadow-md mx-auto">
        <img
          className="object-cover w-full h-64"
          src={toyPhotoUrl}
          alt={toyName}
        />

        <div className="p-6">
          <div>
            <div className="mb-3">
              <span className="text-3xl font-medium text-[#753c3c] uppercase  ">
                <span className="text-gray-800 text-xl">Toy Name: </span>{" "}
                {toyName}
              </span>
            </div>

            <hr></hr>
            <table className="table-fixed border-collapse my-4">
              <tbody>
                <tr>
                  <td className="border border-1 w-1/4 p-2  bg-red-100/40 text-gray-700 font-medium">
                    Sub Category
                  </td>
                  <td className="border border-1 p-2 w-screen text-gray-600 font-bold pl-4 ">
                    {toyCategory}
                  </td>
                </tr>
                <tr>
                  <td className="border border-1 w-1/4 p-2  bg-red-100/40 text-gray-700 font-medium">
                    Seller Name
                  </td>
                  <td className="border border-1 p-2 w-screen text-gray-600 font-bold pl-4 ">
                    {sellerName}
                  </td>
                </tr>
                <tr>
                  <td className="border border-1 w-1/4 p-2  bg-red-100/40 text-gray-700 font-medium">
                    Seller Email
                  </td>
                  <td className="border border-1 p-2 w-screen text-gray-600 font-bold pl-4 ">
                    {sellerEmail}
                  </td>
                </tr>
                <tr>
                  <td className="border border-1 w-1/4 p-2  bg-red-100/40 text-gray-700 font-medium">
                    Per Price
                  </td>
                  <td className="border border-1 p-2 w-screen text-gray-600 font-bold pl-4 ">
                    {toyPrice}
                  </td>
                </tr>
                <tr>
                  <td className="border border-1 w-1/4 p-2  bg-red-100/40 text-gray-700 font-medium">
                    Available Quantity
                  </td>
                  <td className="border border-1 p-2 w-screen text-gray-600 font-bold pl-4 ">
                    {availableQuantity}
                  </td>
                </tr>
                <tr>
                  <td className="border border-1 w-1/4 p-2  bg-red-100/40 text-gray-700 font-medium">
                    Rating
                  </td>
                  <td className="border border-1 p-2 w-screen text-gray-600 font-bold pl-4 ">
                    {rating}
                  </td>
                </tr>
                <tr>
                  <td className="border border-1 w-1/4 p-2  bg-red-100/40 text-gray-700 font-medium">
                    Details
                  </td>
                  <td className="border border-1 p-2 w-screen text-gray-600 font-bold pl-4 ">
                    {toyDetails}
                  </td>
                </tr>
              </tbody>
            </table>

            <hr />
          </div>

          <div className="mt-4">
            <div className="flex items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
