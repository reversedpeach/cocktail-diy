import React from "react";
const IngShakerView = ({ing, onRemove}) => {
    const [shaking, update]= React.useState(ing);
        return   <div className="ingShaker">
                       {ing}
                       <button onClick={()=> onRemove(shaking)}> X </button>
                </div>

};

export default IngShakerView;