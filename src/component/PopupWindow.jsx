import React from "react";
import "../component/PopupWindow.css";

function PopupWindow({ title, info, tech, image, onClick }) {
    return (
        <div className="popup-window">
            <h1 className="title">{title}</h1>
            <p className="info">{info}</p>
            <h3 className="tech">Tech used:{tech}</h3>
            <img className="image" src={image} alt="Typing Game" />
            <button className="close-button" onClick={onClick}> Close Popup</button>
        </div>
    );
};

export default PopupWindow;