import React from 'react';
import './Registration.scss'; 

const Registration = () => {
    return (
        <div className="Registration">
        <div className="Registration__card">
            <div className="Registration__form">
            <form style={{width:'100%'}}>
                <h1 className="Registration__title">Sign up</h1>
                <div className="Registration__field">
                    <label className="Registration__label" htmlFor="name">Full name</label>
                    <input type="text" id="name" className="Registration__input" placeholder="Enter your Name" />
                </div>
                <div className="Registration__field">
                    <label className="Registration__label" htmlFor="email">Email</label>
                    <input type="email" id="email" className="Registration__input" placeholder="Enter your email" />
                </div>
                <div className="Registration__field">
                    <label className="Registration__label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="Registration__input" placeholder="Enter your password" />
                </div>
                
                <button type="submit" className="Registration__button">Sign up</button>

                
            </form>
            <div className='Registration__card__or'>
                <span style={{ textAlign: 'center', paddingLeft: '2.07rem', paddingRight: '2.07rem' }} className='Registration__card__middle'>Or</span>
            </div>
            
            <div>
                <p><a href=""><span>I already have an account</span></a></p>
            </div>
            </div>
        </div>
        </div>

    );
};

export default Registration;
