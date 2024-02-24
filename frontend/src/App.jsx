import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostJob from './Pages/PostJob'
import LoginPage from './Pages/LoginPage'
import RegistrationPage from './Pages/RegistrationPage'
import JobListPage from './Pages/JobListPage'
import JobValidationPage from './Pages/JobValidationPage'
import HomePage from './Pages/HomePage'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={<HomePage/>}/>;
    <Route path="/recruitor/login" element={<LoginPage/>}/>;
    <Route path="/applicant/login" element={<LoginPage/>}/>;
    <Route path="/applicant/register" element={<RegistrationPage/>} />;
    <Route path="/applicant/jobs-page" element={<JobListPage/>} />;
    <Route path="/recruitor/NewJob" element={<PostJob/>} />;
    <Route path="/recruitor/jobs-validation" element={<JobValidationPage/>} />;
    <Route path="/reactivate" element="reactivate" />;
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
