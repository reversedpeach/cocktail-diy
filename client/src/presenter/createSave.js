import React from "react";
import CreateSaveView from "../view/createSaveView.js";


function CreateSave() {
    return <CreateSaveView startCreate={() => console.log("save")} />
}

export default CreateSave;