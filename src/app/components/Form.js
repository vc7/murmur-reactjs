import React from "react";

export class Form extends React.Component {

    onSubmit(event) {
        event.preventDefault();
    }

    onKeyDown(event) {
        if ((event.ctrlKey || event.metaKey) && (event.keyCode === 13 || event.keyCode === 10)) {
            console.log("cmd+enter detected");
        }
    }

    render() {
        return (
            <div className="container">
                <form className="form-inline" onSubmit={(event) => this.onSubmit(event)}>
                    <input type="text" className="form-control" onKeyDown={(event) => this.onKeyDown(event)}/>
                    <button className="btn btn-primary ml-3">Submit</button>
                </form>
            </div>
        );
    }
};