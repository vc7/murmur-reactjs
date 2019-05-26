import React from "react";

export const Form = (props) => {
    return (
        <div className="container">
            <form className="form-inline">
                <input type="text" className="form-control"/>
                <button className="btn btn-primary ml-3">Submit</button>
            </form>
        </div>
    );
};