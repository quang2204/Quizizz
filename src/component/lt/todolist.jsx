import React, { Component, useState } from "react";
function todolist(props) {
  const { listuser } = props;

  const [list, setlist] = useState(true);
  const [name, setname] = useState("");

  const handlist = () => {
    setlist(!list);
  };
  const submit = (event) => {
    event.preventDefault();
    props.handadd({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
    });
  };
  const onChangename = (event) => {
    setname(event.target.value);
  };
  return (
    <div
      className="w-[300px] px-[20px]   leading-10  py-[30px] shadow-slate-50 rounded-xl"
      style={{ boxShadow: " 2px 2px 10px 0px #bab1b1" }}
    >
      <p className="text-left">Hey Luckey you</p>
      <h2 className="text-blue-700 font-bold text-left">To-do</h2>
      <p className="pb-3 text-left">{listuser.length} Completed</p>
      <div className="pb-[100px]">
        {listuser.map((user) => {
          return (
            <div
              className="flex gap-[10px] items-center pb-[20px]"
              key={user.id}
            >
              <p
                className="w-[25px] h-[25px] cursor-pointer flex justify-center items-center rounded-full border-2 border-rose-500"
                onClick={() => {
                  props.handdelete(user.id);
                }}
              >
                X
              </p>
              <div className="leading-5 ">
                <p>{user.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" flex justify-end">
        {list && (
          <button
            className="text-right flex items-center px-[25px] h-[35px] button pl-[15px]"
            onClick={() => {
              handlist();
            }}
          >
            <p className="pl-[3px]">+ ADD</p>
          </button>
        )}
      </div>
      {!list && (
        <div
          className=" rounded-xl h-[130px] "
          style={{ boxShadow: " 2px 2px 10px 0px #bab1b1" }}
        >
          <form
            onSubmit={(even) => {
              submit(even);
            }}
          >
            <div className="pt-[20px]">
              <input
                type="text"
                className="inputlist rounded "
                onChange={(event) => {
                  onChangename(event);
                }}
                required=""
              />
            </div>
            <div className="flex justify-evenly  items-center gap-[20px] mt-[20px]">
              <p
                className="text-rose-600 cursor-pointer"
                onClick={() => {
                  handlist();
                }}
              >
                Cancel
              </p>

              <button
                className="text-lime-500 cursor-pointer  h-[30px] px-[40px] flex items-center  bg-green-200 "
                type="submit"
              >
                OK
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default todolist;
