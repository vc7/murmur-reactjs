import React from "react";
import { render } from "react-dom";

import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";
import { Items } from "./components/Items";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            murmurs: []
        }
    }

    onNewMurmur(murmur) {
        var newMurmur = {
            content: murmur
        }
        this.setState({
            ...this.state,
            murmurs: [newMurmur, ...this.state.murmurs]
        })
    }

    render() {
        return (
            <div className="container">
                <Navbar/>
                <div className="container">
                    <Form onNewMurmur={(murmur) => this.onNewMurmur(murmur)}/>
                    <Items murmurs={this.state.murmurs}/>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));