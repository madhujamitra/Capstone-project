import Registration from "../Components/Registration/Registration";
import Header from "../Components/Header/Header";


export default function RegistrationPage() {
  return (
    <>
     <Header
        Route1="recruitor/login"
        Route2="applicant/login"
        Button1="Recruitor"
        Button2="Applicant"
      />
      <Registration />
    </>
  );
}