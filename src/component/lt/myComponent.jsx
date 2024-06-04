import React, { useState } from "react";
import Displayinfo from "./Displayinfo";
import Adduserinfo from "./Adduserinfo";
import Todolist from "./todolist";
import Momo from "./Momo";

function MyComponent(props) {
  const [listuser, setlist] = useState([
    {
      id: 1,
      name: "quang",
      age: "18",
    },
  ]);

  const handadd = (obj) => {
    setlist([obj, ...listuser]);
  };

  const handdelete = (userId) => {
    const newList = listuser.filter((item) => item.id !== userId);
    setlist(newList);
  };

  return (
    <div>
      {/* <Adduserinfo handadd={handadd} />
      <Displayinfo listuser={listuser} handdelete={handdelete} /> */}
      <Todolist
        handadd={handadd}
        listuser={listuser}
        handdelete={handdelete}
      ></Todolist>
      {/* <Momo></Momo> */}
    </div>
  );
}

export default MyComponent;
