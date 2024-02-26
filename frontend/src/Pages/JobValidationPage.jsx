import UserValidation from "../Components/UserValidation/UserValidation";
import HeaderRecruitor from "../Components/Header/HeaderRecruitor";
import axios from "axios";
import { useState, useEffect } from "react";



export default function JobValidationPage() {

  const [JobList, setJobList] = useState([]);


  useEffect(() => {
    const url = `http://localhost:8080/api/Recruiter/jobs`;
   
    
    const jobList = async() => {
      try {
        const response = await axios.get(url);
        setJobList(response.data);
      } catch (err) {
        alert("getting", err);
      }
    };
    jobList();

  
    }, []);



  
  return (
    <>
    <HeaderRecruitor/>
      <UserValidation 
      ActiveJobList = {JobList}
      //ApplicantappliedList = {Application}
      />
      
    </>
  );
}