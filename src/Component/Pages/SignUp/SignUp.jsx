import img from '../../../assets/login.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';


const SignUp = () => {

  const {createUser} = useContext(AuthContext);

  const handleSignUp = event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email,password);

    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      alert('user created sucessfully')
    })
    .catch(error => console.log(error))

  }

    return (
        <div className="hero mb-10">
      <div className="hero-content">
        <div className="text-center lg:text-left w-1/2 mr-36">
         <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-1/2 max-w-sm border ml-36">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-4xl font-semibold text-center">Sign Up</h1>
            <div className="form-control mt-4 font-semibold">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control mt-4 font-semibold">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control font-semibold">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-error">Sign Up</button>
                            
              <h3 className="font-semibold text-center pt-12 pb-8">Already Have an account?
              <Link to='/login'> <span className="text-orange-600">Login</span></Link></h3>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignUp;