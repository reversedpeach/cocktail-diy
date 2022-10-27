import React from "react";

export default function UploadDisplayImgView(props) {
    function setIMG(event) {
        props.setSelectedImage(event.target.files[0]);
    }

    function clearIMG() {
        props.setSelectedImage(null);
    }
    return (
        <div>
            {props.img && (
                <div>
                    <img alt="not fount" width={"250px"} src={URL.createObjectURL(props.img)} />
                    <br />
                    <button onClick={clearIMG}>Remove</button>
                </div>
            )}
            <br />

            <br />
            <input
                type="file"
                name="myImage"
                onChange={setIMG}
            />
        </div>
    );
}