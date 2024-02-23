import React from 'react';
import './Login.scss'; 

const Login = () => {
    return (
        <div className="login">
        <div className="login__card">
            <div className="login__form">
            <form style={{width:'100%'}}>
                <h1 className="login__title">Sign in</h1>
                <div className="login__field">
                    <label className="login__label" htmlFor="email">Email</label>
                    <input type="email" id="email" className="login__input" placeholder="Enter your email" />
                </div>
                <div className="login__field">
                    <label className="login__label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="login__input" placeholder="Enter your password" />
                </div>
                <button type="submit" className="login__button">Login</button>

                
            </form>
            <div className='login__card__or'>
                <span style={{ textAlign: 'center', paddingLeft: '2.07rem', paddingRight: '2.07rem' }} className='login__card__middle'>Or</span>
            </div>
            
            <div>
                <p>Don't have an account? <a href=""><span>Sign up</span></a></p>
            </div>
            </div>
        </div>
        </div>

    );
};

export default Login;
