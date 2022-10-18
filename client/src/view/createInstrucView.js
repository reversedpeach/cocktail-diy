import React from "react";

const createInstrucView = () => {

    return <div>
        <div>
            <label>Instructions:</label>
            <br></br>
            <textarea placeholder="Start with mixing..." rows="10" cols="30"></textarea>
        </div>
        <form action={console.log("uploaded")}>
            <label for="img">Upload image:</label>
            <input type="file" id="img" name="img" accept="image/*" />
            <input type="submit" />
        </form>
    </div>



};
export default createInstrucView;


