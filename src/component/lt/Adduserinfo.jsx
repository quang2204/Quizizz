import React, { Component, useState } from "react";
function Adduserinfo(props) {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const onChangename = (event) => {
    setname(event.target.value);
  };
  const onChangetuoi = (event) => {
    setage(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.handadd({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      <div>Name: {name}</div>
      <div>Tuổi: {age}</div>
      <form
        action=""
        onSubmit={(event) => {
          onSubmit(event);
        }}
      >
        <label htmlFor="">Name</label>
        <input
          type="text"
          onChange={(event) => {
            onChangename(event);
          }}
          style={{ border: "1px solid black" }}
        />
        <label htmlFor="">Tuổi</label>
        <input
          type="text"
          onChange={(event) => {
            onChangetuoi(event);
          }}
          style={{ border: "1px solid black" }}
        />
        <button type="submit">CLICK</button>
      </form>
    </div>
  );
}

export default Adduserinfo;
