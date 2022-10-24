import React from "react";

const ToggleModeView = ({ currentMode, changeMode }) => {
    return (
        <div className="switchBox">
            <label className="switch">
                <input type="checkbox" onClick={changeMode} />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default ToggleModeView;