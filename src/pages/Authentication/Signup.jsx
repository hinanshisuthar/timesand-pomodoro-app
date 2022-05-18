import { Link } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";
import { useAuth } from "../../context/auth-context";

const Signup = () => {
  const [signupCredentials, setSignupCredentials] = useState({
    email: "",
    password: "",
  });
  const { signupUser } = useAuth();

  const inputHandler = (e) => {
    setSignupCredentials({
      ...signupCredentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="wrapper center">
      <div className="auth-con signup-con p-1 flex-col-sb">
        <h1>Sign Up</h1>
        <div className="credentials-con flex-col-sb">
          <label htmlFor="" className="width-100">
            Email
            <input
              type="text"
              name="email"
              className="input-box p-sm my-sm"
              placeholder="rachelgreen@gmail.com"
              value={signupCredentials.email}
              onChange={inputHandler}
            />
          </label>
          <label htmlFor="" className="width-100">
            Password
            <input
              type="password"
              name="password"
              className="input-box p-sm my-sm"
              placeholder="********"
              value={signupCredentials.password}
              onChange={inputHandler}
            />
          </label>
        </div>
        <div>
          <div className="flex-col-sb btn-con">
            <button
              className="btn btn-primary text-regular text-capitalize m-sm width-100"
              onClick={() => signupUser(signupCredentials)}
            >
              Sign Up
            </button>
          </div>
          <Link to="/login">
            <h5 className="create-account p-sm">
              Already have an account? Log In
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Signup };
