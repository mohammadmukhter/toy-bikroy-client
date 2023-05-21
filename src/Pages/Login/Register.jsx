import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import registerImg from "../../../src/assets/register.jpg";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { registerHandler } = useContext(AuthContext);
  const [error, setError] = useState(null);

  useTitle("Register");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || "/";

  const formHandler = (event) => {
    event.preventDefault();
    setError(null);
    const form = event.target;
    const userName = form.user_name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userPhotoUrl = form.user_photo_url.value;

    if (userName.length == 0) {
      setError("User Name Required ");
    }
    if (password.length < 6) {
      setError("Password should be 6 characters ");
    }
    if (password.length == 0) {
      setError("Password is required");
    }
    if (email.length == 0) {
      setError("Email is required");
    }

    if (password.length >= 6 && email.length != 0 && password != 0) {
      registerHandler(email, password)
        .then((res) => {
          const registeredUser = res.user;
          console.log(registeredUser);

          {
            toast.success("New User Create Successfully", {
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

          updateProfile(registeredUser, {
            displayName: `${userName}`,
            photoURL: `${userPhotoUrl}`,
          })
            .then((result) => {
              if (result) {
                console.log(result);
              }

              form.reset();
              navigate(from, { replace: true });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((err) => {
          if (err) {
            toast.warn("User Already Exist", {
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
        });
    }
  };
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={registerImg} alt="Register Image" />
        </div>
        <div className="container mx-auto px-5 py-2 lg:px-12 lg:pt-8">
          <div className="bg-[#E7CBCB]/30 py-8 px-4 rounded-md shadow-lg">
            <h2 className="text-[#643843] text-4xl font-semibold mb-4">
              Register
            </h2>
            <form onSubmit={formHandler}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="User Name"
                  name="user_name"
                  className="input w-full "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="User Photo URL"
                  name="user_photo_url"
                  className="input w-full"
                />
              </div>
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
                  value="Register"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already have an account?
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

export default Register;
