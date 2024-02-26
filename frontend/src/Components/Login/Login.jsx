import React from "react";
import "./Login.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const isRecruiter = pathname.includes("/recruitor/");
  const isApplicant = pathname.includes("/applicant/");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sessionStorage.clear();
    let url;
    const updatedItem = {
      email: formData.email,
      password: formData.password,
    };
    if (isRecruiter) {
      url = `http://localhost:8080/api/Recruiter/login`;
    } else if (isApplicant) {
      url = `http://localhost:8080/api/Applicant/login`;
    }
    try {
      const response = await axios.post(url, updatedItem);
      setError("")
      console.log(response);
     sessionStorage.setItem('sessionID', response.data.user.sessionId);
     sessionStorage.setItem('id', response.data.user.id);
     sessionStorage.setItem('email', response.data.user.email);
     sessionStorage.setItem('name', response.data.user.name);
      handleBackClick();
    } catch (error) {
        setError("try again")
     
    }
   
  };

  const handleBackClick = () => {
    if (isRecruiter) {
    navigate("/recruitor/jobs-validation");
    } else if (isApplicant){
        navigate("/applicant/jobs-page"); 
    }
  };

  const handleBackLogin = () => {
    if (isRecruiter) {
    navigate("/recruitor/register");
    } else if (isApplicant){
        navigate("/applicant/register"); 
    }
  };
  return (
    <div className="login">
      <div className="login__card">
        <div className="login__form">
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <h1 className="login__title">Sign in</h1>
            <div className="login__field">
              <label className="login__label" htmlFor="email">
                Email
              </label>
              <input
                 type="email"
                 id="email"
                 name="email"
                 className="Registration__input"
                 placeholder="Enter your email"
                 onChange={handleChange}
                 value={formData.email}
              />
            </div>
            <div className="login__field">
              <label className="login__label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="Registration__input"
                placeholder="Enter your password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>

            <button type="submit" className="login__button">
              Login
            </button>
            <span>{error}</span>
          </form>
          <div className="login__card__or">
            <span
              style={{
                textAlign: "center",
                paddingLeft: "2.07rem",
                paddingRight: "2.07rem",
              }}
              className="login__card__middle"
            >
              Or
            </span>
          </div>

          <div>
            <p onClick={handleBackLogin}>
              Don't have an account?
              <a href=" ">
                <span>Sign up</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
