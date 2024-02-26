import JobList from "../Components/JobList/JobList";
import HeaderApplicant from "../Components/Header/HeaderApplicant";
import axios from "axios";
import { useState, useEffect } from "react";

export default function JobListPage() {

  const [Jobs, setJobs] = useState([]);


  useEffect(() => {
    const url = `http://localhost:8080/api/Applicant/jobs`;
   
    
    const JobPost = async() => {
      try {
        const response = await axios.get(url);
        console.log(response.data)
        setJobs(response.data);
      } catch (err) {
        alert("getting", err);
      }
    };
    JobPost();

  
    }, []);


  return (
    <>
    <HeaderApplicant/>
      <JobList 
      JobPost= {Jobs}/>
    </>
  );
}