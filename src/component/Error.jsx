import React from "react";
import Hearder from "./Header/Hearder";
import { NavLink } from "react-router-dom";
const Errors = () => {
  return (
    <>
      <Hearder></Hearder>
      <div className="flex justify-content-center ">
        <div className="absolute top-[30%]">
          <img
            src="https://cf.quizizz.com/image/Group1.png"
            className="max-w-[200px] m-auto"
            alt=""
          />
          <br />
          <h2 className="text-[1.5rem] font-semibold">
            Ối! Chúng tôi không thể tìm thấy bài kiểm tra này
          </h2>
          <br />
          <NavLink to="/">
            <div className="flex justify-center">
              <button className="bg-purple-300 text-white px-3 py-2 rounded-md">
                Về trang chủ
              </button>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Errors;
