import React from "react";
import "./styles.css";

function Login() {
  return (
    <div className="container">
      <div className="left">
        <div className="login-section">
          <header>
            <h2
              className="animation a1"
              style={{
                fontFamily: "Space Grotesk",
                color: "#171717",
                fontSize: "52px",
                fontWeight: "700",
              }}
            >
              Aupdeshik
            </h2>
            <h4
              className="animation a2"
              style={{
                color: "#171717",
                opacity: "0.5",
                lineHeight: "22px",
                fontSize: "16px",
              }}
            >
              Welcome back, Please login to your account
            </h4>
          </header>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="input-field animation a3"
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field animation a4"
            />
            <p className="animation a5">
              <a href="#" style={{ color: "#171717" }}>
                Forgot password?
              </a>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button className="animation a6">Log In</button>
            </div>
          </form>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Login;
