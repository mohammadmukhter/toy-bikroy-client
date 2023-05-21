import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginImg from "../../../src/assets/login.jpg";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { loginHandler, googleLoginHandler } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useTitle("Login");

  const from = location?.state?.from.pathname || "/";

  const formHandler = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    if (email.length == 0) {
      setError("User Email Required!");
      return;
    } else if (password.length == 0) {
      setError("User Password Required!");
      return;
    }

    loginHandler(email, password)
      .then((res) => {
        const loggedUser = res.user;
        if (loggedUser) {
          {
            toast.success("Login Successfully", {
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
        form.reset();

        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const googleHandler = () => {
    googleLoginHandler()
      .then((res) => {
        const user = res.user;
        if (user) {
          {
            toast.success("Login Successfully", {
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
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left flex items-center justify-center">
          <img className="w-3/4 h-3/4" src={loginImg} alt="Register Image" />
        </div>
        <div className="container mx-auto px-5 py-2 lg:px-12 lg:pt-8">
          <div className="bg-[#E7CBCB]/30 py-8 px-4 rounded-md shadow-lg">
            <h2 className="text-[#643843] text-4xl font-semibold mb-4">
              Please Login
            </h2>
            <form onSubmit={formHandler}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input w-full "
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <p className="text-red-600">{error}</p>
                </label>
              </div>

              <div className="form-control my-4">
                <input
                  className="w-1/2 mx-auto cursor-pointer px-2 py-1 rounded bg-[#643843] text-[#E7CBCB] hover:bg-[#472D2D] font-bold"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="form-control my-4">
              <button
                onClick={googleHandler}
                className="w-1/2 mx-auto cursor-pointer px-2 py-1 rounded bg-[#4285F4] text-[#FFFFFF] hover:bg-[#4285F4] font-bold"
              >
                Google Sign In
              </button>
            </div>

            <div className="form-control">
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Don't have an account?
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
