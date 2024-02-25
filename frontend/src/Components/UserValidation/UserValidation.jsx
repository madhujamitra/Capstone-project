import "../UserValidation/UserValidation.scss";
import JobDetailCard from './JobDetailCard'
import { useState } from "react";
const { v4: uuidv4 } = require('uuid');


export default function UserValidation({ActiveJobList}) {
  

  const [open, setOpen] = useState(false);
  const [List, setList] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


 
  return (
    <>
      <section className="userv">
        <div className="userv__expanded-card">
       
  

{ActiveJobList && ActiveJobList.jobs && Object.keys(ActiveJobList.jobs).length > 0 ? (
  Object.entries(ActiveJobList.jobs).map(([jobId, jobDetails]) => (
   
    <JobDetailCard
      jobId={jobId}
      job={jobDetails}

      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      open={open}
      List={List}
    />
  ))
) : (
  <p>No jobs</p>
)}

         
        </div>
      </section>
    </>
  );
}
