import React from "react";
import { NoItem } from "./NoItem";
import { Item } from "./Item";

export const Items = (props) => {
    if (props.murmurs.length) {
        return (
            <div>
                {props.murmurs.map((murmur, index) => <Item key={index} murmur={murmur}/>)}
            </div>
        );
    } else {
        return (
            <div>
                <NoItem/>
            </div>
        );
    }
};