import "./Registration.scss";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    skills: [],
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "skill") {
      const skillsArray = value.split(",").map((skill) => skill.trim());
      setFormData({
        ...formData,
        [name]: skillsArray,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedItem = {
      email: formData.email,
      name: formData.name,
      password: formData.password,
      skills: formData.skills,
      yearOfExperience: formData.year,
    };
    console.log(updatedItem);
    try {
      const response = await axios.post(`http://localhost:8080/api/Applicant/register`,updatedItem);
    } catch (error) {
      alert("Error:", error);
    }
   handleBackClick();
  };

  const handleBackClick = () => {
    navigate("/recruitor/login");
  };

  return (
    <div className="Registration">
      <div className="Registration__card">
        <div className="Registration__form">
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <h1 className="Registration__title">Sign up</h1>
            <div className="Registration__field">
              <label className="Registration__label" htmlFor="name">
                Full name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="Registration__input"
                placeholder="Enter your Name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div className="Registration__field">
              <label className="Registration__label" htmlFor="Skill">
                Skill
                <span className="newjob__second-title">
                      (comma-separated)
                    </span>
              </label>
              <input
                type="skills"
                id="skills"
                name="skills"
                className="Registration__input"
                placeholder="Enter your skills"
                onChange={handleChange}
                value={formData.skills.join(",")}
              />
            </div>
            <div className="Registration__field">
              <label className="Registration__label" htmlFor="expreince">
                Year of expreince
              </label>
              <input
                type="expreince"
                id="expreince"
                name="year"
                className="Registration__input"
                placeholder="Enter your Expirence"
                onChange={handleChange}
                value={formData.year}
              />
            </div>
            <div className="Registration__field">
              <label className="Registration__label" htmlFor="email">
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
            <div className="Registration__field">
              <label className="Registration__label" htmlFor="password">
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

            <button type="submit" className="Registration__button">
              Sign up
            </button>
          </form>
          <div className="Registration__card__or">
            <span
              style={{
                textAlign: "center",
                paddingLeft: "2.07rem",
                paddingRight: "2.07rem",
              }}
              className="Registration__card__middle"
            >
              Or
            </span>
          </div>

          <div>
            <p onClick={handleBackClick}>
              
                <span>I already have an account</span>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
