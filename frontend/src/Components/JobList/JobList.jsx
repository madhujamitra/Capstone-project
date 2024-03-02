import "../JobList/JobList.scss";
import Skill from "../../Assets/Images/icon/tool.svg";
import Industry from "../../Assets/Images/icon/industry.svg";
import Location from "../../Assets/Images/icon/location.svg";
import Description from "../../Assets/Images/icon/description.svg";
import React, { useState } from 'react';
import AlertDialog from './AlertDialog'

import axios from 'axios';

export default function JobList({JobPost}) {
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');


const applyJob = async(job, jobId) => {

  
    const url = `http://localhost:8080/api/Applicant/jobs/apply/${jobId}`;
   const applicant ={
    applicantId: sessionStorage.getItem('id'),
    email: sessionStorage.getItem('email'),
    name: sessionStorage.getItem('name')
   }
 
    try {
      
     const response = await axios.post(url,applicant );
    //  alert(response.data.message);
    setAlertMessage(response.data.message);
      setOpen(true);

    } catch (error) {
      console.error('Failed to perform operation:', error);
      
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    {JobPost && JobPost.jobs && Object.keys(JobPost.jobs).length > 0 ? (
      Object.entries(JobPost.jobs).map(([jobId, jobDetails]) => (
        jobDetails.status === "open" ? (
    
      <div className="job">
      <div className="job__card">
        <div className="job__card-background">
          <div className="job__card-inner">
            <div className="job__card-side-left">
            <div className="job-title">
                <h2>{jobDetails.title}</h2>
                <span className="job-title-text">{jobDetails.status}</span>
              </div>
              <div className="job__icon-group">
                <img src={Description} className="job__icon" alt="Descrption" />
            
                <p>
                {jobDetails.description}
                </p>
              </div>
            </div>
            <div className="job__divider">
            </div>
            <div className="job__card-side-right ">
              <div className="job__icon-group">
                <img src={Skill} className="job__icon" alt="Skill" />
                <ul className="job__skills">
                {jobDetails.skills.map((skill, index) => (
                    <li className="userv__small-card" key={index}>
                      {skill}
                    </li>
                  ))}

                </ul>
              </div>
              
                <div className="job__icon-group">
                  
                  <img src={Location} className="job__icon" alt="Skill" />
                  <span>{jobDetails.location}</span>
                </div>
                <div className="job__icon-group">
                  <img src={Industry} className="job__icon" alt="Industry" />
                  <span className="job__small-card">{jobDetails.industry}</span>
                </div>
             
            </div>
          </div>
          <div>
            <button className="job__card-button"
            onClick={() => applyJob(jobDetails, jobId)}
            > Apply </button>
             <AlertDialog open={open} handleClose={handleClose} message={alertMessage} />
          </div>
        </div>
      </div>
      
    </div>
    ) : null
      ))
    ) : null}
    </>
  );
}
