import "../UserValidation/UserValidation.scss";
import Skill from "../../Assets/Images/icon/tool.svg";
import Industry from "../../Assets/Images/icon/industry.svg";
import Location from "../../Assets/Images/icon/location.svg";
import Role from "../../Assets/Images/icon/tool.svg";
import Description from "../../Assets/Images/icon/description.svg";
import pen from "../../Assets/Images/icon/pen.svg";


export default function UserValidation() {
  return (
    <>
    <section className="userv">
      <div className="userv__expanded-card">
        <div className="userv__card">
          <div className="userv__card-background">
            <div className="userv__card-inner">
              <div className="userv__card-side-left">
                <div>
                  <h2>Software Engineer</h2>
                </div>
                <div className="userv__icon-group">
                  <img src={Description} className="userv__icon" alt="Descrption" />
              
                  <p>
                    Full stack software engineer required with expertise in
                    React and Node.js
                  </p>
                </div>
              </div>
              <div className="userv__divider">
              </div>
              <div className="userv__card-side-right ">
                <div className="userv__icon-group">
                  <img src={Skill} className="userv__icon" alt="Skill" />
                  <ul className="userv__skills">
                    <li className="userv__small-card">skill</li>
                    <li className="userv__small-card">skill</li>
                    <li className="userv__small-card">skill</li>
                  </ul>
                </div>
                
                  <div className="userv__icon-group">
                    
                    <img src={Location} className="userv__icon" alt="Skill" />
                    <span>Location</span>
                  </div>
                  <div className="userv__icon-group">
                    <img src={Industry} className="userv__icon" alt="Industry" />
                    <span className="userv__small-card">Industry</span>
                  </div>
               
              </div>
            </div>
            <div className="button-aligment">
              <div className="button-left">
              <button className="userv__card-button"> Applicants </button>
              <button className="userv__card-button userv__card-button-delete"> Delete </button>
              </div>
              <div className="button-right">
              <button className="userv__card-button"> Re-activate </button>
              </div>
             
            </div>
          </div>
        </div>
        <div>
  applicant list
</div>
      </div>
  

      </section>
    </>
  );
}
