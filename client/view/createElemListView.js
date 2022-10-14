import React from "react";

const createElemListView = ({ ingredient }) => {
    return <div className="createTitle"> {ingredient}
        <input type="text" placeholder="Amount" />
    </div>

};

export default createElemListView;