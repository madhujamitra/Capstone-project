import "../UserValidation/UserValidation.scss";
import JobDetailCard from './JobDetailCard'




export default function UserValidation({ActiveJobList}) {
  

 
  return (
    <>
      <section className="userv">
        <div className="userv__expanded-card">
       
  

{ActiveJobList && ActiveJobList.jobs && Object.keys(ActiveJobList.jobs).length > 0 ? (
  Object.entries(ActiveJobList.jobs).map(([jobId, jobDetails]) => (
   
    <JobDetailCard
      jobId={jobId}
      job={jobDetails}

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
