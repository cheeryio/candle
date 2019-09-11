import React from 'react';
import ActiveInput from './ActiveInput';
import "./EmailSignUp.css"

const EmailSignUp = () => (
    <div className="submit-email">
        <ActiveInput id={1}
                     label="Enter your email address"
                     locked={false}
                     active={false}/>
        <button className="btn btn-primary sign-up btn-light">SIGN UP</button>
    </div>
);

export default EmailSignUp;

