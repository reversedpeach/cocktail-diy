import React from "react";

const CreateSaveView = ({ startCreate }) => {

    return <div className="createBtnBox">
        <button className="createBtn" onClick={startCreate}>Create </button>
    </div>

};

export default CreateSaveView;