import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { Getquizzid } from "../../Server/ApiServer";
import _ from "lodash";
import Loading from "../Loading";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const Quizzz = (props) => {
  const param = useParams();
  const [quizDataLength, setQuizDataLength] = useState(0);
  const [quizz, setquizz] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const quizzid = param.id;
  useEffect(() => {
    fethquizz();
  }, [quizzid]);
  let location = useLocation();
  const fethquizz = async () => {
    const res = await Getquizzid(quizzid);

    if (res.data.EC == 0) {
      setLoading(true);

      let raw = res.data.DT;
      let data = _.chain(raw)
        .groupBy("id")
        .map((value, key) => {
          let answers = [];
          let questiondescription,
            img = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questiondescription = item.description;
              img = item.image;
            }
            answers.push(item.answers);
            // console.log("item", item.answers);
          });
          // console.log("value", value);
          // detail.questionid = key;
          return { questionid: key, answers, questiondescription, img };
        })
        .value();
      setQuizDataLength(data.length);
      setquizz(data);

      console.log("ss", res);
      console.log("data", data);
    }
  };
  return (
    <div className="quiz-container m-auto w-full px-3" key={2}>
      {isLoading == false ? <Loading key={1}></Loading> : ""}

      <div className="relative rounded-md z-10 pt-2 px-3 pb-3  mt-[30px] bg-light-3 border-sm border border-ds-dark-500-20">
        <div className=" flex justify-content-end mr-2 mt-2  ">
          <div className="hidden  max-[810px]:block">
            {["Secondary"].map((variant) => (
              <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title=""
              >
                <Dropdown.Item eventKey="1">
                  <i className="fa-regular fa-heart pr-2"></i>
                  Thích
                </Dropdown.Item>

                <Dropdown.Item eventKey="2">
                  <i className="bi bi-printer pr-2"></i> In
                </Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  <i className="bi bi-exclamation-triangle pr-2"></i> Báo cáo
                </Dropdown.Item>

                <Dropdown.Item eventKey="4">
                  <i className="fa-solid fa-share text-[11px] pr-2"></i> Chia sẻ
                </Dropdown.Item>
              </DropdownButton>
            ))}
          </div>
        </div>

        <div className="flex justify-content-end items-center gap-2 max-[810px]:hidden">
          <i
            className="fa-solid fa-code fa-fw rounded px-3 h-[23px] items-center text-[11px] flex justify-center"
            style={{ border: "1px solid #09090933" }}
          ></i>
          <div
            className="rounded cursor-pointer px-3 h-[23px] items-center  flex justify-center gap-2"
            style={{ border: "1px solid #09090933" }}
          >
            <i className="fa-solid fa-share text-[11px]"></i>
            <span className="font-semibold text-[0.8rem]">Chia sẻ</span>
          </div>
          <i
            className="fa-regular fa-heart rounded  px-3 h-[23px] items-center text-[11px] flex justify-center"
            style={{ border: "1px solid #09090933" }}
          ></i>
          <i className="fa-solid fa-triangle"></i>
          <div
            className="rounded  px-3 h-[23px] items-center  flex justify-center"
            style={{ border: "1px solid #09090933" }}
          >
            <i className="bi bi-exclamation-triangle"></i>
          </div>
          <div
            className="rounded  px-3 h-[23px] items-center  flex justify-center"
            style={{ border: "1px solid #09090933" }}
          >
            <i className="bi bi-printer "></i>
          </div>
        </div>
        <div className="flex items-start gap-[20px] pt-3 pb-3">
          <div className="w-full max-w-[200px] img  max-[750px]:max-w-[100px] max-[1200px]:max-w-[150px] max-[750px]:text-[18px]">
            <img
              src={`data:image/jpeg;base64,${location.state.img}`}
              className=""
              alt=""
            />
          </div>

          <div>
            <div className="pb-7 max-[810px]:pb-1">
              <p
                className=" uppercase w-[52px] rounded-full flex justify-center text-xs max-[810px]:hidden"
                style={{
                  backgroundColor: "rgba(9, 9, 9, 0.05)",
                  border: "1px solid #09090933",
                }}
              >
                Quizz
              </p>
            </div>
            <h4 className="font-semibold text-[1.2rem] max-[750px]:text-[18px]">
              {location.state.quizzd}
            </h4>
            <div className="py-1 max-[810px]:block hidden">
              <i className="fa-solid fa-list-check pr-2 text-[0.8rem]"></i>
              <span className="text-[0.8rem]"> {quizDataLength} câu hỏi</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 flex-wrap items-center max-[810px]:text-[0.75rem]">
          <div
            className="flex gap-2 text-[14px] cursor-pointer px-2 py-1 rounded-md font-semibold "
            style={{
              backgroundColor: "rgba(9, 9, 9, 0.05)",
            }}
          >
            <i className="bi bi-download"></i>
            Bảng tính
          </div>
          <div
            className="flex gap-2 text-[14px] cursor-pointer items-center px-2 py-1 rounded-md font-semibold "
            style={{
              backgroundColor: "rgba(9, 9, 9, 0.05)",
            }}
          >
            <i className="fa-regular fa-folder"></i>
            Lưu
          </div>
          <div
            className="flex gap-2 text-[14px] cursor-pointer px-2 py-1 rounded-md font-semibold "
            style={{
              backgroundColor: "rgba(9, 9, 9, 0.05)",
            }}
          >
            <i className="bi bi-stars"></i>
            Tăng cường AI
          </div>
          <div
            className="flex gap-2 text-[14px] cursor-pointer items-center px-2 py-1 rounded-md font-semibold "
            style={{
              backgroundColor: "rgba(9, 9, 9, 0.05)",
            }}
          >
            <i className="fa-regular fa-copy"></i>
            Sao chép và chỉnh sửa.
          </div>
        </div>
      </div>
      <br />
      <div className="grid grid-cols-2 items-center gap-4  max-[510px]:grid-cols-1 pb-4 sticky top-[75px] z-50">
        {/* <NavLink to={``}> */}
        <button
          className="h-[3.25rem] bg-lilac text-white flex items-center rounded-md  justify-between px-3 "
          onClick={() => {
            navigate(`/Detail/${location.state.id}`);
          }}
        >
          <div className="flex gap-3 items-center">
            <i className="fa-solid fa-chalkboard-user max-[810px]:text-base"></i>
            <span className="text-[1.125rem] font-semibold max-[810px]:text-base">
              Bắt đầu ngay
            </span>
          </div>

          <i className="fa-solid fa-caret-right"></i>
        </button>
        {/* </NavLink> */}

        <button className="h-[3.25rem] bg-lilac text-white flex items-center rounded-md  justify-between px-3">
          <div className="flex gap-3 items-center">
            <i
              className="fa-regular fa-clock max-[810px]:text-base"
              style={{ color: "rgba(136,84,192" }}
            ></i>
            <span
              className="text-[1.125rem] font-semibold max-[810px]:text-base"
              style={{ color: "rgba(136,84,192" }}
            >
              Giao bài
            </span>
          </div>

          <i
            className="fa-solid fa-caret-right"
            style={{ color: "rgba(136,84,192" }}
          ></i>
        </button>
      </div>
      <div>
        <div className="pb-4 block  max-[810px]:hidden">
          <i className="fa-solid fa-list-check pr-2"></i>
          <span className="text-[1.1rem]"> {quizDataLength} câu hỏi</span>
        </div>
        {quizz &&
          quizz.length > 0 &&
          quizz.map((quizz, index) => {
            return (
              <>
                <div
                  className="border-solid border-2 rounded-md p-3"
                  key={`${index}-quizz`}
                >
                  <div>
                    <i className="fa-regular fa-square-check text-green-400 pb-4 pr-2"></i>
                    <span className="font-semibold">
                      {index + 1}:Nhiều lựa chọn
                    </span>
                  </div>
                  <div className="flex items-center pb-4">
                    {quizz.img !== null && (
                      <img
                        src={`data:image/jpeg;base64,${quizz.img}`}
                        className="max-w-[130px] pr-4"
                        alt=""
                      />
                    )}
                    <div className=" font-semibold">
                      {quizz.questiondescription}
                    </div>
                  </div>
                  <div className=" grid grid-cols-2 max-[810px]:grid-cols-1">
                    {quizz.answers &&
                      quizz.answers.length > 0 &&
                      quizz.answers.map((answer, indexs) => {
                        return (
                          <div key={indexs}>
                            <div className="flex items-start mb-2 w-1/2 ">
                              <span className="w-5 h-5 rounded-full my-1 mr-2 shrink-0 relative bg-dark-6"></span>
                              <span>{answer.description}</span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

                <br />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Quizzz;
