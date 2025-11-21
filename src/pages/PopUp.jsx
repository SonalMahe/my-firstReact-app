import { useState } from "react";
import PopupWindow from "../component/PopupWindow.jsx";

function Popup() {
    const [popupInfo, setPopupInfo] = useState({
        title: " Typing Word Game",
        info: "This typing game is created by JavaScript using different types of DOM elements ex- getElementById, Math function ,addEventListener, Arrays and objects, SetInterval, clearInterval and Update score",
        image: "here is image",
    });
    const [isOpen, setIsOpen] = useState(false);
    const closepopup = () => {
        setIsOpen(false)

    };

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Popup</button>
            <h1> Popup-Page</h1>
            {isOpen && (
                <PopupWindow
                    title={popupInfo.title}
                    info={popupInfo.info}
                    onClick={closepopup}
                />
            )}

        </div>
    );
};
export default Popup;