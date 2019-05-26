import React from "react";

export const Item = (props) => {
    return (
        <div className="row border py-3 px-3 my-3 bg-white">
            <span>{props.murmur.content}</span>
        </div>
    );
};