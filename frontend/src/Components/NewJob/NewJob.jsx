import "../NewJob/NewJob.scss";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewJob() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    skills: [],
    location: "",
    industry: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "skills") {
      
      const skillsArray = value.split(",").map(skill => skill.trim());
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

  const handleSubmit = async(e) => {
    e.preventDefault();
   const updatedItem = {
    title: formData.name,
    description: formData.description,
    skills: formData.skills,
    location: formData.location,
    industry: formData.industry,
    
   }
    try {
      const response = await axios.post(`http://localhost:8080/api/Recruiter/jobs`,updatedItem);
     
  } catch(error) {
      alert("Error:", error)
  }
  handleBackClick();
  };

  const handleBackClick = () => {
    navigate("/recruitor/jobs-validation");
  };

  return (
    <section className="newjob">
      <div className="newjob__expanded-card">
        <div className="newjob__card">
          <form className="newjob__card-background" onSubmit={handleSubmit}>
            <h2 className="newjob__heading">New Job</h2>
            <div className="newjob__card-inner">
              <div className="newjob__card-side">
                <div className="newjob__icon-group">
                  <label htmlFor="name" className="newjob__label">
                    Name:
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    className="newjob__input"
                    onChange={handleChange}
                  />
                </div>
                <div className="newjob__icon-group">
                  <label htmlFor="description" className="newjob__label">
                    Description:
                  </label>
                  <textarea
                    id="description"
                    className="newjob__input"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="newjob__icon-group">
                  <label htmlFor="skills" className="newjob__label">
                    Skills
                    <span className="newjob__second-title">
                      (comma-separated)
                    </span>
                    :
                  </label>
                  <input
                    id="skills"
                    type="text"
                    className="newjob__input"
                    name="skills"
                    value={formData.skills.join(",")}
                    onChange={handleChange}
                  />
                </div>

                <div className="newjob__icon-group">
                  <label htmlFor="location" className="newjob__label">
                    Location:
                  </label>
                  <input
                    id="location"
                    type="text"
                    className="newjob__input"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                <div className="newjob__icon-group">
                  <label htmlFor="industry" className="newjob__label">
                    Industry:
                  </label>
                  <input
                    id="industry"
                    type="text"
                    className="newjob__input"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="button-aligment">
              <div className="button-left">
                <button className="newjob__card-button newjob__card-button-delete" onClick={handleBackClick}>
                  Back
                </button>
              </div>
              <div className="button-right">
                <button type="submit" className="newjob__card-button">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
