import React from "react";
import { render } from "react-dom";

import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";
import { Items } from "./components/Items";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar/>
                <div className="container">
                    <Form/>
                    <Items/>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));