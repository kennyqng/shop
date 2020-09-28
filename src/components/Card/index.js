import React from "react";
import "./style.css";

function Card(props) {
    return (
        <>
        <div className="base">
            <div className="preview">
                <img className="thumbnail" src={props.thumbnail} alt="preview of product"></img>
            </div>
            <div className="details">
                <h3 className="title">{props.title}</h3>
                <p className="price">{props.price}</p>
            </div>
        </div>
        </>
    );
}

export default Card;