import React from 'react';
import logo from './logo.svg';
import './App.css';

import Logo from './images/SVG/logo.svg'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={Logo} width={"50%"} color={"white"} alt="logo"/>

                {/*<h1 className="font-black text-6xl font-serif mt-6">*/}
                {/*    Coming soon.*/}
                {/*</h1>*/}
            </header>
        </div>
    );
}

export default App;
