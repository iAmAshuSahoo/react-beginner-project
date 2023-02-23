import { useState } from "react";
import BeginnerLayout from "../beginnerUtility/BeginnerLayout/BeginnerLayout";
import "./Carousal.css";

function Carousal() {
  const imagesList = [
    "https://cdn.pixabay.com/photo/2012/12/27/19/40/chain-link-72864_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/06/17/20/35/chain-3481377_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/03/22/17/28/rings-684944_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/04/07/23/11/link-building-4111001_1280.jpg",
  ];
  const [image, setImage] = useState(imagesList[imagesList.length - 1]);

  function changeImage(forward) {
    let currentPos = imagesList.findIndex((im) => im === image);
    if (forward) {
      if (imagesList[imagesList.length - 1] === image) {
        setImage(imagesList[0]);
      } else {
        setImage(imagesList[currentPos + 1]);
      }
    } else {
      if (imagesList[0] === image) {
        setImage(imagesList[imagesList.length - 1]);
      } else {
        setImage(imagesList[currentPos - 1]);
      }
    }
  }
  return (
    <BeginnerLayout headingTitle="Project 1: Carousal">
      <div className="carousal-card">
        <button className="btnAttr" onClick={changeImage}>
          Back
        </button>
        <img className="imageAttr" src={image} alt="chain" />
        <button className="btnAttr" onClick={() => changeImage("forward")}>
          Front
        </button>
      </div>
    </BeginnerLayout>
  );
}

export default Carousal;
