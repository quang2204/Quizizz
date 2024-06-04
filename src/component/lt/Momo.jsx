import React, { Component, useState } from "react";
function Momo(props) {
  const [sothe, setsothe] = useState("•••• •••• •••• ••••");
  const [nam, setnam] = useState("••/••");
  const [name, setname] = useState("Tên chủ thẻ");

  const onchangethe = (even) => {
    setsothe(even.target.value);
  };
  const onchangenam = (even) => {
    setnam(even.target.value);
  };
  const onchangename = (even) => {
    setname(even.target.value);
  };
  return (
    <div>
      <h2 className="text-xl mb-10"> Nhập thông tin thẻ để thanh toán</h2>
      <div className="relative">
        <div className="momo w-[300px] h-[220px] flex flex-col items-start pl-4 rounded-xl mb-10 m-auto ">
          <div className="sothe text-white pt-[30px] text-xl">{sothe}</div>
          <div className="pt-[20px]">
            <div className=" text-white ">mm/yy</div>
            <div className="nam text-white ">{nam}</div>
          </div>

          <div className="name text-white pt-[20px] text-xl">{name}</div>
        </div>
        <div className="absolute bottom-[15px] right-[120px]">
          <img
            src="https://test-payment.momo.vn/v2/gateway/images/logo-napas-white.svg"
            alt=""
          />
        </div>
      </div>

      <form action="">
        <div className="flex">
          <div>
            <div>
              <label htmlFor="" className="input">
                Số thẻ
              </label>
              <input
                type="text"
                className="border mb-4"
                placeholder="Nhập số thẻ"
                onChange={(even) => {
                  onchangethe(even);
                }}
              />
            </div>
            <div>
              <label htmlFor="" className="input">
                Họ tên
              </label>
              <input
                type="text"
                className="border mb-4"
                placeholder="Tên chủ thẻ"
                onChange={(even) => {
                  onchangename(even);
                }}
              />
            </div>
          </div>

          <div className="ml-3">
            <label htmlFor="" className="input">
              Ngày
            </label>
            <input
              type="text"
              className="border mb-4 "
              placeholder="ngày phát hành"
              onChange={(even) => {
                onchangenam(even);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Momo;
