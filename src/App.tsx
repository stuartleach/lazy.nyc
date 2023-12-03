import React from 'react';
import logo from './logo.svg';
import './App.css';

import Logo from './images/SVG/logo.svg'

function EmailSignup() {
    return <form action="submit" className="">
        <label>Hello</label>
        <input type="text" placeholder="Email Address"
               className="m-10 mt-40 bg-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"/>
    </form>;
}

function Description() {
    return <section className="description align-middle justify-center flex text-white text-left flex-col w-2/3">
        <h1 className="text-5xl font-black uppercase">Hello</h1>
        <>
            <p className="">
                Lazy.nyc is an innovative brand that offers a unique suite of plugins tailor-made for the modern
                individual
                who values efficiency and simplicity. Embracing the motto of doing "productive" things "lazily,"
                Lazy.nyc
                transforms everyday tasks into streamlined, user-friendly experiences.
            </p>
            <h2 className="">Key Products:</h2>
            <h3 className="">Lazy Buddha:</h3>
            <p className="">
                This meditation app epitomizes the essence of Lazy.nyc. It's designed for users seeking a
                straightforward, no-fuss approach to mindfulness. With minimal input required, Lazy Buddha guides users
                through calming sessions, making meditation accessible to even the busiest individuals.
            </p>
            <h3 className="">Lazy Pages:</h3>
            <p className="">
                A journaling app that redefines traditional diary-keeping. Lazy Pages caters to those who want
                to document their thoughts and experiences without the burden of extensive writing. Its intuitive
                interface
                allows for quick entries, making reflection and personal growth an effortless part of daily life.
            </p>
            <p className="">
                Overall, Lazy.nyc stands out in the digital landscape by providing tools that blend productivity with
                ease,
                ensuring that even the most daunting tasks can be tackled with a relaxed, efficient approach.
            </p>
        </>
    </section>;
}

function App() {
    return (
        <div className="App" style={styles.body}>
            <header className="App-header" style={styles.header}>
                <img src={Logo} width={"10%"} style={{maxWidth: "80%", maxHeight: "40%"}} alt="logo"/>
            </header>




            {/*<Description/>*/}
            {/*<EmailSignup/>*/}
        </div>
    );
}

export default App;

const styles = {

    body: {
        backgroundColor: "#395569",
        minHeight: "100vh",
        padding: "10%",
    },

    description: {
        backgroundColor: "#395569",
        color: "white",
        textAlign: "left",
        width: "2/3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    emailSignup: {
        backgroundColor: "#395569",
        color: "white",
        textAlign: "left",
        width: "2/3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        backgroundColor: "#395569",
        color: "white",
        // textAlign: "left",
        width: "2/3",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }


}