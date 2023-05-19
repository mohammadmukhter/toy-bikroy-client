import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../src/assets/login.jpg";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { loginHandler } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state.from.pathname || "/";

  const formHandler = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    const userData = {
      email,
      password,
    };

    console.log(userData);

    loginHandler(email, password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        form.reset();

        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
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
                  type="text"
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
              <div className="form-control my-4">
                <input
                  className="w-1/2 mx-auto cursor-pointer px-2 py-1 rounded bg-[#643843] text-[#E7CBCB] hover:bg-[#472D2D] font-bold"
                  type="submit"
                  value="Login"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Don't have an account?
                  </Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
