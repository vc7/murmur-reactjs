import React from "react";
import { render } from "react-dom";

import { Form } from "./components/Form";
import { Items } from "./components/Items";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Murmur</h1> 
                <Form/>
                <Items/>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));