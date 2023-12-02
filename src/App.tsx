import React from 'react';
import logo from './logo.svg';
import './App.css';

import Logo from './images/SVG/logo.svg'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={Logo} width={"50%"} style={{maxWidth: "80%", maxHeight: "80%"}} color={"white"} alt="logo"/>
                <input type="text" placeholder="fuck you"
                       className="bg-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                {/*<h1 className="font-black text-6xl font-serif mt-6">*/}
                {/*    Coming soon.*/}
                {/*</h1>*/}
            </header>
        </div>
    );
}

export default App;
