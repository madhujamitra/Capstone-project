import UserValidation from "../Components/UserValidation/UserValidation";
import HeaderRecruitor from "../Components/Header/HeaderRecruitor";
import axios from "axios";
import { useState, useEffect } from "react";



export default function JobValidationPage() {

  const [JobList, setJobList] = useState([]);
//const [Application, setApplication] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8080/api/Recruiter/jobs`;
    //const url2 = `http://localhost:8080/api/Recruiter/jobs/${jobid}/application`;
    
    const jobList = async() => {
      try {
        const response = await axios.get(url);
        setJobList(response.data);
      } catch (err) {
        alert("getting", err);
      }
    };
    jobList();

    // const ApplicantList = async() =>{ try {
    //   const response = await axios.get(url2);
    //   setApplication(response.data);
    // } catch (err) {
    //   alert("getting", err);
    // }

    // };
    // ApplicantList();
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