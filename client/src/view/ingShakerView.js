import React from "react";

const IngShakerView = ({ ing, onRemove }) => {

        return <div className="ingShaker">
                <span className="ingShakerTitle"> {ing}</span>
                <button className="ingShakerBtn" onClick={() => onRemove(ing)}> X </button>
        </div>

};

export default IngShakerView;