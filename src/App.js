import React from 'react';
import candle from './svgs/candle.svg';
import './App.css';
import EmailSignUp from './components/EmailSignUp';

function App() {
    return (
        <div className="App">
            <div className="center-logo">
                <img src={candle} className="App-logo" alt="logo"/>
            </div>
            <div className="landing-page-text">
                <div className="hype-line text-left">
                    <h1>
                        CALLING ALL YOU CREATIVE PEOPLE,
                    </h1>
                </div>
                <div className="hype-line-2">
                    <h1>
                        LET'S UNITE.
                    </h1>
                </div>
                <div>
                    <h2 className="description">
                        Helping designers, developers, and content creators find each other.
                    </h2>
                </div>
                <div>
                    <h2 className="tag-line">
                        Connect, Collaborate, Create.
                    </h2>
                </div>
                <div className="email-sign-up">
                    <EmailSignUp/>
                </div>
            </div>
        </div>
    );
}

export default App;
