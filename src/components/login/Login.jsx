import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful");
  };

  return (
    <>
      <h1 className=" head mt-2 text-bg-info text-center text-dark">Login</h1>
      <div className="d-flex justify-content-center align-items-center bg-white  vh-80">
        <div className="bg-secondary p-3 rounded w-80">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                autoCapitalize="off"
                name="email"
                value={email}
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={password}
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Login
            </button>
          </form>
          <p>Already Have an Account</p>
        </div>
      </div>
    </>
  );
};

export default Login;
