import React from "react";
import "../component/PopupWindow.css";

function PopupWindow({title, info, onClick}){
    return(
        <div className="popup-window">
            <h1 className="title">{title}</h1>
            <p className="info">{info}</p>
           {/*<img className="image" src="../src/assets/typinggame.JPG"> {image}</img>*/}
            <button className="close-button" onClick={onClick}> Close Popup</button>

        </div>
    );
};

export default PopupWindow;