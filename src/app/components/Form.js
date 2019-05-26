import React from "react";
import PropTypes from "prop-types";

export class Form extends React.Component {
    constructor(props) {
        super();
        this.state = {
            murmur: "",
        }
    }

    onSubmit(event) {
        event.preventDefault();
    }

    onKeyDown(event) {
        if ((event.ctrlKey || event.metaKey) && (event.keyCode === 13 || event.keyCode === 10)) {
            console.log("\"" + this.state.murmur + "\" recieved");
            this.setState({
                murmur: ""
            });
        }
    }

    onHandleChangeMurmur(event) {
        this.setState({
            murmur: event.target.value
        })
    }

    render() {
        return (
            <div className="row border py-3 px-3 my-3 bg-white">
                <form className="form-inline" onSubmit={(event) => this.onSubmit(event)}>
                    <input 
                        type="text"
                        className="form-control" 
                        value={this.state.murmur}
                        onKeyDown={(event) => this.onKeyDown(event)}
                        onChange={(event) => this.onHandleChangeMurmur(event)}/>
                    <button className="btn btn-primary ml-3">碎碎念</button>
                </form>
            </div>
        );
    }
};

Form.propTypes = {
    murmur: PropTypes.string,
}