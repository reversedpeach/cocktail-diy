import React from "react";

const ToggleModeView = ({ currentMode, changeMode }) => {
    return (
        <div><span>{currentMode}</span>
            <label class="switch">
                <input type="checkbox" onClick={changeMode} />
                <span class="slider round"></span>
            </label>
        </div>
    );
};

export default ToggleModeView;