import "../ApplicationList/ApplicationList.scss";
import Skill from "../../Assets/Images/icon/tool.svg";
import user from "../../Assets/Images/icon/user.svg";
import year from "../../Assets/Images/icon/year.svg";
import status_icon from "../../Assets/Images/icon/status.svg";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

export default function ApplicationList({ List, jobId }) {
  const [applications, setApplications] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentApplicantId, setCurrentApplicantId] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (List) {
      const url = `http://localhost:8080/api/Recruiter/jobs/${jobId}/application`;


      const fetchApplications = async () => {
        try {
          const response = await axios.get(url);
         
          const updatedApplications = response.data.map((app) => ({
            ...app,
            localStatus: app.applicationStatus || "Pending",
          }));
          setApplications(updatedApplications);
        } catch (err) {
          console.error("Error fetching applications:", err);
          
        }
      };
      fetchApplications();
    }
  }, [List, jobId]);




  if (!List) return null;

  const handleMenuClick = (event, applicantId) => {
    setAnchorEl(event.currentTarget);
    setCurrentApplicantId(applicantId);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusChange = async (status) => {
    handleClose();

    try {
      const url = `http://localhost:8080/api/Recruiter/jobs/${jobId}/application`;
      const StatusUpdate = { 
        applicantId: currentApplicantId,
        status: status }; 
      const response = await axios.put(url, StatusUpdate);
      
      if (response.status === 200) {
        setApplications(applications.map(app => 
          app.applicantId === currentApplicantId ? { ...app, localStatus: status } : app
        ));
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
    
   
  };


  

  return (
    <div className="applicant">

      {applications.length > 0 ? ( applications.map((applicant) => (
       
        <div key={applicant.applicantId} className="applicant__card">
          <div className="applicant__card-inner applicant__card-part">
            <div className="userv__card-side-left">
              <div className="applicant__icon-group">
                <img src={user} className="userv__icon" alt="user" />
                <span>{applicant.name}</span>
              </div>
              <div className="applicant__icon-group applicant__group">
                <img src={Skill} className="userv__icon" alt="skill" />
                <ul className="userv__skills">
                {applicant.skills.map((skill, index) => (
                  <li  key= {index} className="userv__small-card">{skill}</li>
               ) )}
            
                </ul>
              </div>
              <div className="applicant__icon-group">
                <img src={year} className="userv__icon" alt="exprience" />
                <span>{applicant.yearOfExperience}</span>
              </div>
            </div>
            <div className="userv__divider"></div>
            <div className="userv__card-side-right">
              <div className="applicant__icon-group">
                <img
                  src={status_icon}
                  className="userv__icon"
                  alt="status_icon"
                />
                <span>{applicant.localStatus}</span>
              </div>
              <div>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={(event) =>
                    handleMenuClick(event, applicant.applicantId)
                  }
                  style={{
                    backgroundColor: "#F0DC28",
                    color: "#13182C",
                    borderRadius: "1.25rem",
                    padding: "0.5rem 1.5rem",
                  }}
                >
                  Update Status
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={
                    Boolean(anchorEl) &&
                    currentApplicantId === applicant.applicantId
                  }
                  onClose={handleClose}
                >
                  {["Rejected", "Accepted", "In Interview", "Selected"].map(
                    (statusOption) => (
                      <MenuItem
                        key={statusOption}
                        onClick={() => handleStatusChange(statusOption)}
                      >
                        {statusOption}
                      </MenuItem>
                    )
                  )}
                </Menu>
              </div>
            </div>
          </div>
        </div>
       
      ))):(
        <div>No applicant</div>
      )
      
      }
    </div>
  );
}
