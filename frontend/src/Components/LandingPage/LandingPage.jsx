import Header from "../Header/Header";
import "../LandingPage/LandingPage.scss";
import MainImage from "../../Assets/Images/main-logo.svg";

export default function LandingPage() {
  return (
    <>
      <Header
        Route1="recruitor/login"
        Route2="applicant/login"
        Button1="Recruitor"
        Button2="Applicant"
      />
      <main className="Page__background">
        <div>
          <img src={MainImage} alt="" />
          <h2>To make hiring more organized</h2>
        </div>
      </main>
    </>
  );
}
