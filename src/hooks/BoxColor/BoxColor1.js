import React, {useState, useEffect} from "react";
import "../../scss/BoxColor.css";
import useBoxColor from "./BoxColor";


BoxColor1.propType = {};

function BoxColor1() {
    const { color } = useBoxColor();

    return (
        <div
            className={"box_color"}
            style={{backgroundColor: color}}
        />
    );
}

export default BoxColor1;
