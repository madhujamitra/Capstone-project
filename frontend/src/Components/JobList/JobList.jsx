import "../JobList/JobList.scss";
import Skill from "../../Assets/Images/icon/tool.svg";
import Industry from "../../Assets/Images/icon/industry.svg";
import Location from "../../Assets/Images/icon/location.svg";
import Description from "../../Assets/Images/icon/description.svg";


export default function JobList() {
  return (
    <>
      <div className="job">
       

        <div className="job__card">
          <div className="job__card-background">
            <div className="job__card-inner">
              <div className="job__card-side-left">
                <div>
                  <h2>Software Engineer</h2>
                </div>
                <div className="job__icon-group">
                  <img src={Description} className="job__icon" alt="Descrption" />
              
                  <p>
                    Full stack software engineer required with expertise in
                    React and Node.js
                  </p>
                </div>
              </div>
              <div className="job__divider">
              </div>
              <div className="job__card-side-right ">
                <div className="job__icon-group">
                  <img src={Skill} className="job__icon" alt="Skill" />
                  <ul className="job__skills">
                    <li className="job__small-card">skill</li>
                    <li className="job__small-card">skill</li>
                    <li className="job__small-card">skill</li>
                  </ul>
                </div>
                
                  <div className="job__icon-group">
                    
                    <img src={Location} className="job__icon" alt="Skill" />
                    <span>Location</span>
                  </div>
                  <div className="job__icon-group">
                    <img src={Industry} className="job__icon" alt="Industry" />
                    <span className="job__small-card">Industry</span>
                  </div>
               
              </div>
            </div>
            <div>
              <button className="job__card-button"> Apply </button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
