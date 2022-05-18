import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";
import { useAuth } from "../../context/auth-context";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const guestLoginHandler = () => {
    setLoginCredentials({
      email: "hinanshis4@gmail.com",
      password: "1234567",
    });
    loginUser({
      email: "hinanshis4@gmail.com",
      password: "1234567",
    });
    setTimeout(() => {
      navigate('/')
    }, 1500)
  };

  return (
    <>
      <div className="wrapper center">
        <div className="auth-con login-con p-1 flex-col-sb">
          <h1>Log In</h1>
          <div className="credentials-con flex-col-sb">
            <label htmlFor="" className="width-100">
              Email
              <input
                type="text"
                className="input-box p-sm my-sm"
                placeholder="rachelgreen@gmail.com"
                value={loginCredentials.email}
                onChange={(e) =>
                  setLoginCredentials({
                    ...loginCredentials,
                    email: e.target.value,
                  })
                }
              />
            </label>
            <label htmlFor="input" className="width-100">
              Password
              <input
                id="input"
                type="password"
                className="input-box p-sm my-sm"
                placeholder="********"
                value={loginCredentials.password}
                onChange={(e) =>
                  setLoginCredentials({
                    ...loginCredentials,
                    password: e.target.value,
                  })
                }
              />
            </label>
          </div>
          <div>
            <div className="flex-col-sb btn-con">
              <button
                className="btn btn-secondary text-regular text-capitalize m-sm width-100"
                onClick={() => loginUser(loginCredentials)}
              >
                Login
              </button>
              <button
                className="btn btn-primary text-regular text-capitalize m-sm width-100"
                onClick={() => guestLoginHandler()}
              >
                Guest Login
              </button>
            </div>
            <Link to="/signup">
              <h5 className="create-account p-sm">Create an Account</h5>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { Login };
