import React, { useState } from "react";
import _ from "lodash";
import { useEffect } from "react";
const Question = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handclick = (index, aid, qid) => {
    setActiveIndex(index);
    props.handcheck(aid, qid);
  };
  const { data, index } = props;
  if (_.isEmpty(data)) {
    return <></>;
  }

  return (
    <div>
      <div className="">
        <div
          className={` ${
            data.img == null ? "mt-[156px] pb-[129px]" : "mt-[58px]  pb-[68px]"
          } text-[32px] max-[1000px]:text-[28px] max-[1000px]:font-medium gap-10 font-bold  px-3 flex justify-center items-center max-[770px]:flex-col max-[770px]:mt-0 max-[770px]:pb-[48px] max-[560px]:text-xl`}
        >
          {data.img !== null ? (
            <img
              src={`data:image/jpeg;base64,${data.img}`}
              className="w-52 rounded-xl "
              alt=""
            />
          ) : (
            ""
          )}
          <div>{data.questiondescription} </div>
        </div>
        <div className="flex gap-2 w-full h-full sm:w-[calc(100%/var(--totalOptions))] px-3 pb-[14px] theme max-[560px]:flex-col ">
          {data.answers &&
            data.answers.map((item, index) => {
              return (
                <div
                  className={`theme-classic cursor-pointer flex justify-center items-center relative h-[200px] max-[560px]:h-full max-[560px]:py-5 ${
                    item.isSelect == true
                      ? "active"
                      : item.isSelect !== true
                      ? ""
                      : ""
                  } `}
                  key={`${index}`}
                  onClick={() => {
                    handclick(index, item.id, data.questionid, item.isSelect);
                    item.isSelect = !item.isSelect;
                  }}
                >
                  <div>{item.description}</div>
                  <div
                    className="absolute top-2 right-2 px-[9px] py-[1px] rounded-lg  text-[18px] "
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.2)",
                      boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 0px 0px",
                    }}
                  >
                    {index + 1}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Question;
