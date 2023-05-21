import { Link } from "react-router-dom";
import notFoundImg from "../../../assets/404.jpg";
const NotFound = () => {
  return (
    <div>
      <div className="w-3/4 md:w-80 lg:w-96 h-auto mx-auto">
        <img src={notFoundImg} alt="" />
      </div>
      <div className="text-center">
        <Link to="/" className="btn">
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
