import { Link } from "react-router-dom";
import registerImg from "../../../src/assets/register.jpg";

const Register = () => {
  const formHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.user_name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userPhotoUrl = form.user_photo_url.value;

    const userData = {
      userName,
      email,
      password,
      userPhotoUrl,
    };

    console.log(userData);
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
