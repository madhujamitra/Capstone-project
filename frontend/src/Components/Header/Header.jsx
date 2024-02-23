import '../Header/Header.scss';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//import Logo from '../../Assets/Images/logo.svg'

export default function Header(){
    const [activeLink, setActiveLink] = useState('');
    const updateActiveLink = (linkName) => {
        setActiveLink(linkName);
    };
    useEffect(() => {
        setActiveLink('Applicant')
    }, [])

    return (

        <header className={`header ${'header-outside'}`}>
        <div className="header__container">
       
            <nav className="header__logo-container">
                <Link to={`/Applicant`} onClick={() => updateActiveLink('Applicant')}><span className="header__logo">swiftHire</span></Link>
            </nav>
            
                <nav className="header__nav-bar">
                    <div className={`header__state ${activeLink === 'Applicant' ? 'header__active-nav-item' : 'header__nav-link--inactive'}`}>
                        <Link to={`/Applicant`} onClick={() => updateActiveLink('Applicant')} className='text-decor'> 
                            <h3 className="header__nav-link">Applicant</h3>
                        </Link>
                    </div>
                    <div className={`header__state ${activeLink === 'Recruitor' ? 'header__active-nav-item' : 'header__nav-link--inactive'}`}>
                        <Link to={`/Recruitor`} onClick={() => updateActiveLink('Recruitor')} className='text-decor'> 
                            <h3 className="header__nav-link">Recruitor</h3>
                        </Link>
                    </div>
                </nav>
        </div>
       
    </header>
    
    );

}