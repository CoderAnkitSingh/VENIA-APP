import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="login-section">
      <div className="form-div">
        <h3 className="text-center mb-2">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>User Name</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-row">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-row">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
