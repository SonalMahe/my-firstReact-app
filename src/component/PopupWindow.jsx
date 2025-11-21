import React from "react";
import "../component/PopupWindow.css";

function PopupWindow({title, info ,onClose}){
    return(
        <div className="popup-window">
            <h1 className="title">{title}</h1>
            <p className="info">{info}</p>
            <button className="close-button" onClick={onClose}> Close Window</button>

        </div>
    );
};

export default PopupWindow;