import React, { useState } from "react";

//set state of hook is replace data
//set state of class component is merge data
export default function HookCounter(props) {
  const [list, setList] = useState([
    "hello baby",
    "Xin chao cac ban",
    "Hello cac con vo",
    "Pho` cut ra cho khac"
  ]);
  function handleClick(index) {
    //creat newList clone from list
    const newList = [...list];

    //delete index of array
    newList.splice(index, 1);
    //update list
    setList(newList);
  }
  return (
    <div>
      <ol>
        {list.map((data, index) => (
          <li key={index} onClick={() => handleClick(index)}>
            {data}
          </li>
        ))}
      </ol>
    </div>
  );
}
