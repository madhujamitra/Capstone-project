import "../ApplicationList/ApplicationList.scss";
import Skill from "../../Assets/Images/icon/tool.svg";
import user from "../../Assets/Images/icon/user.svg";
import year from "../../Assets/Images/icon/year.svg";
import status_icon from "../../Assets/Images/icon/status.svg";
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ApplicationList() {

    const [anchorEl, setAnchorEl] = useState(null);
    const [status, setStatus] = useState('Pending');
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const createHandleMenuClick = (option) => () => {
      console.log(option);
      setStatus(option);
      handleClose();
    };
  return (
    <div className="applicant">
      <div className="applicant__card">
        <div className="applicant__card-inner applicant__card-part">
          <div className="userv__card-side-left">
            <div className="applicant__icon-group">
              <img src={user} className="userv__icon" alt="user" />
              <span>Name</span>
            </div>
            <div className="applicant__icon-group applicant__group">
              <img src={Skill} className="userv__icon" alt="skill" />
              <ul className="userv__skills">
                <li className="userv__small-card">skill</li>
                <li className="userv__small-card">skill</li>
                <li className="userv__small-card">skill</li>
                <li className="userv__small-card">skill</li>
              </ul>
            </div>
            <div className="applicant__icon-group">
              <img src={year} className="userv__icon" alt="exprience" />
              <span>year of exprience</span>
            </div>
          </div>
          <div className="userv__divider"></div>
          <div className="userv__card-side-right">
            <div className="applicant__icon-group">
              <img src={status_icon} className="userv__icon" alt="status_icon" />
              <span>{status}</span>
            </div>
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
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
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={createHandleMenuClick("Rejected")}>
                  Rejected
                </MenuItem>
                <MenuItem onClick={createHandleMenuClick("Accepted")}>
                  Accepted
                </MenuItem>
                <MenuItem onClick={createHandleMenuClick("In Interview")}>
                  In Interview
                </MenuItem>
                <MenuItem onClick={createHandleMenuClick("Selected")}>
                  Selected
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
