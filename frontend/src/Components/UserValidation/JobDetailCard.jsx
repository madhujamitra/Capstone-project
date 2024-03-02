import Skill from "../../Assets/Images/icon/tool.svg";
import Industry from "../../Assets/Images/icon/industry.svg";
import Location from "../../Assets/Images/icon/location.svg";
import Description from "../../Assets/Images/icon/description.svg";
import DialogBox from "./DialogBox";
import ApplicationList from "../ApplicationList/ApplicationList";
import {  useState } from "react";
import axios from 'axios';

export default function JobCardDetail({
  job,
  jobId

}) {
  const [List, setList] = useState(false);
  const [open, setOpen] = useState(false);
  const [output, setoutput] = useState(null);
  const [applicationStatus, setApplicationStatus] = useState(null);
 
 

  const handleListOpen = () => {
    setList(true);
  };

  const handleListClose = () => {
    if (List === true) {
      setList(false);
    }
  };

 

  const handleClose = () => {
    setOpen(false);
  };

  const performOperation = async () => {
    const url = `http://localhost:8080/api/Recruiter/jobs/${jobId}/reactivate`;
   
    try {

      const response = await axios.put(url);
      setoutput(response.data);
      setOpen(true);
     console.log(response.data.job.status);
     console.log(response.data)
     if(response.data.job.status === "open" && response.data.message === "All applications rejected. Job reactivated with no applications."){
      document.getElementsByClassName('job-title-text')[jobId - 1].style.display = "none";
      document.getElementsByClassName('job-title-text2')[jobId - 1].style.display = "block";
      setApplicationStatus("open");
     }
     
    
  
    } catch (error) {
      console.error('Failed to perform operation:', error);
      
    }
  };

 

   const handleClickOpen = () => {
    performOperation();

   
  };


  return (
    <>
      <div className="userv__card" onClick={handleListClose}>
        <div className="userv__card-background">
          <div className="userv__card-inner">
            <div className="userv__card-side-left">
              <div className="job-title">
                <h2>{job.title}</h2>
                {/* <span className="job-title-text">{job.status}</span> */}
                <span className={`job-title-text ${job.status === 'open' ? 'status-open' : 'status-closed'}`}>
  {job.status}
</span>

                <span className="job-title-text2">{applicationStatus}</span>
              </div>
              <div className="userv__icon-group">
                <img
                  src={Description}
                  className="userv__icon"
                  alt="Descrption"
                />

                <p>{job.description}</p>
              </div>
            </div>
            <div className="userv__divider"></div>
            <div className="userv__card-side-right">
              <div className="userv__icon-group">
                <img src={Skill} className="userv__icon" alt="Skill" />
                <ul className="userv__skills">
                  {job.skills.map((skill, index) => (
                    <li className="userv__small-card" key={index}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="userv__icon-group">
                <img src={Location} className="userv__icon" alt="location" />
                <span>{job.location}</span>
              </div>
              <div className="userv__icon-group">
                <img src={Industry} className="userv__icon" alt="Industry" />
                <span className="userv__small-card">{job.industry}</span>
              </div>
            </div>
          </div>
          <div className="button-aligment">
            <div className="button-left">
              <button className="userv__card-button" onClick={handleListOpen}>
                Applicants
              </button>
              <button className="userv__card-button userv__card-button-delete">
                Delete
              </button>
            </div>
            <div className="button-right">
              <button className="userv__card-button" onClick={handleClickOpen} >
                Re-activate
              </button>
              <DialogBox open={open} handleClose={handleClose}  output={output} jobId= {jobId}/>
            </div>
          </div>
        </div>
      </div>
      <ApplicationList List={List} jobId={jobId} />
    </>
  );
}
