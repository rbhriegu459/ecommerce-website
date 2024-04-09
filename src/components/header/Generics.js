import { useContext, useState } from "react";
import classes from "./Generics.module.css";
import { Button } from "react-bootstrap";
import { GlobalContext } from "../../App";


function Generics() {
  const {showAlbum} = useContext(GlobalContext);
  return (
    <div className={classes.secondHeader}>
      <h1>The Generics</h1>
      {showAlbum && <div className={classes.showalbum}>
        <Button className={classes.album}>Get our latest Album</Button>
        <Button className={classes.play}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-play"
            viewBox="0 0 16 16"
          >
            <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
          </svg>
        </Button>
      </div>}
    </div>
  );
}

export default Generics;
