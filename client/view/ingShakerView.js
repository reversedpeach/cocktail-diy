import React from "react";

const IngShakerView = ({ing, onRemove}) => {

        return   <div className="ingShaker">
                       {ing}
                       <button onClick={()=> onRemove(ing)}> X </button>
                </div>

};

export default IngShakerView;