import React from "react";

const CreateDrinkView = ({ startCreate }) => {

    return <div className="createBtnBox">
        <button className="createBtn" onClick={startCreate}>Create </button>
    </div>

};

export default CreateDrinkView;