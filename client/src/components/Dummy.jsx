//Useful if a component is as it should be, tells that it has changed

import React from "react";

export const Dummy = ({shouldRenderText, text}) => {

    return shouldRenderText && <div>{"HAHA"}</div>

}