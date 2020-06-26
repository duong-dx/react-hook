import React, {useState, useEffect} from "react";
import "../../scss/BoxColor.css";
import useBoxColor from "./BoxColor";

function getColorRandom() {
    const COLOR_LIST = [
        "yellow",
        "green",
        "blue",
        "deepink",
        "red",
        "#9633FF",
        "#FA8072",
        "#E9967A",
        "#FF5733",
        "#ffd24d"
    ];
    const RANDOM_INDEX = Math.trunc(Math.random() * COLOR_LIST.length);
    return COLOR_LIST[RANDOM_INDEX];
}

BoxColor2.propType = {};

function BoxColor2() {
    const { color } = useBoxColor();
    return (
        <div
            className={"box_color"}
            style={{backgroundColor: color}}
        />
    );
}

export default BoxColor2;
