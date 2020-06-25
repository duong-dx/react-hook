import React, {useState, useEffect} from "react";
import "../scss/BoxColor.css";

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

BoxColor.propType = {};

function BoxColor() {
    const [color, setColor] = useState(() => {
        //goi 1 lan duy nhat khi khoi tao
        const initColor = localStorage.getItem("box_color") || "black";
        return initColor;
    });

    function handleColor() {
      let newColor = getColorRandom();
      setColor(newColor);
      localStorage.setItem("box_color", newColor);
    };

    useEffect(() => {
        let timeColor;
        timeColor = setInterval(() => handleColor(), 1000);
        return () => {
            clearInterval(timeColor);
        };
    }, []);
    return (
        <div
            className={"box_color"}
            style={{backgroundColor: color}}
            onClick={() => handleColor()}
        />
    );
}

export default BoxColor;
