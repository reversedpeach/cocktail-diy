import React, { useState } from "react";
import UploadDisplayImgView from "../view/uploadDisplayImgView.js";

export default function UploadAndDisplayImage(props) {
    const [selectedImage, setSelectedImage] = useState(null);

    return (<UploadDisplayImgView img={selectedImage} setSelectedImage={(img) => setSelectedImage(img)} clearIMG={() => setSelectedImage(null)} />)
};