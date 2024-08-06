import { useContext } from "react";
import img from "../../../assets/login.svg";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../../Firebase/firebse.config";

const Login = () => {

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    signIn(email, password)
    .then(result => {
      const logedInUser = result.user;
      alert('user login successfully');
      console.log(logedInUser);
      const user = {email};
      
      // get access token
      axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
      .then(res => {
        console.log(res.data)
        if(res.data.success){
          navigate(location?.state ? location?.state : '/')
        }
      })

    })
    .catch(error => console.log(error));
  };

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, provider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.log('error', error.message)
    })
  }

  return (
    <div className="hero mb-10">
      <div className="hero-content">
        <div className="text-center lg:text-left w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-1/2 max-w-sm border ml-36">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-4xl font-semibold text-center">Login</h1>
            <div className="form-control mt-4 font-semibold">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control font-semibold">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-error">Login</button>
              <h3 className="text-center font-medium pt-8">Or Sign In with</h3>
              <div className="text-center pt-10 space-x-4 ">
                
                <button onClick={handleGoogleSignIn} className="btn btn-circle">
                  <FcGoogle />
                </button>
              </div>
              <h3 className="font-semibold text-center pt-12 pb-8">
                New to Klassy Cafe?
                <Link to="/signup">
                  {" "}
                  <span className="text-orange-600">Sign Up</span>
                </Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
