import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
// import Login from './Components/Login/Login'
//import Registration from './Components/Registration/Registration'
import UserValidation from './Components/UserValidation/UserValidation';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      {/* <Login/> */}
   {/* <Registration/> */}
   {/* <JobList/> */}
   <UserValidation/>

    <Routes>
    <Route path="/" element="" />;
    <Route path="/login" element="login"/>;
    <Route path="/register" element="register" />;
    <Route path="/jobs-page" element="jobs-page" />;
    <Route path="/jobs-posting" element="jobs-posting" />;
    <Route path="/jobs-validation" element="jobs-validation" />;
    <Route path="/reactivate" element="reactivate" />;
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
