import Login from "../Components/Login/Login";
import Header from "../Components/Header/Header";
import axios from "axios";

export default function LoginPage() {



  return (



    <>
      <Header
        Route1="recruitor/login"
        Route2="applicant/login"
        Button1="Recruitor"
        Button2="Applicant"
      />
      <Login  />
    </>
  );
}
