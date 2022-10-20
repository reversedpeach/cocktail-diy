import React from "react";

const ToggleModeView = ({ currentMode, changeMode }) => {
    return (
        <div className="switchBox">
            <label class="switch">
                <input type="checkbox" onClick={changeMode} />
                <span class="slider round"></span>
            </label>
        </div>
    );
};

export default ToggleModeView;