import React, { useRef } from "react";
import { useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Getanswer,
  Deletequestion,
  postQuizz,
} from "../../../Server/ApiServer";

import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import Loading from "../../Loading";
const Questions = () => {
  const [quizz, setarrQuizz] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isdelete, setdelete] = useState("");
  const param = useParams();
  const naviget = useNavigate();
  const location = useLocation();

  const handledelete = async (id) => {
    const paramid = +param.id;
    let res = await Deletequestion(id, paramid);
    if (res.data && res.data.EC === 0) {
      toast.success(res.data.EM);
      const updatedQuizz = quizz.filter((item) => item.id !== id);
      setarrQuizz(updatedQuizz);
    }
  };
  useEffect(() => {
    const getQuizz = async () => {
      const res = await Getanswer(param.id);
      setLoading(true);
      const data = [
        {
          data: res.data.DT,
        },
      ];
      setarrQuizz(data[0].data.qa);
    };

    getQuizz();
  }, [param.id]);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handled = (id) => {
    setdelete(id);
  };
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setdelete(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [buttonRef]);
  const handledupdate = (id, description, ansewn) => {
    console.log(id, description, ansewn);
  };

  return (
    <>
      <div className=" ">
        {isLoading == false ? <Loading key={1}></Loading> : ""}
        <div
          className="flex p-3 items-center gap-3 bg-white"
          style={{ boxShadow: "4px 0px 2px 0px" }}
        >
          <NavLink to="../admin/quan-ly-quiz">
            <button className=" border border-solid px-3  rounded h-7 w-1 flex justify-center items-center">
              <i
                className="flex items-center fas fa-chevron-left "
                style={{ fontSize: "12px" }}
              ></i>
              <span data-v-37969509="" className="title" title=""></span>
            </button>
          </NavLink>

          <p className="font-semibold text-[14px] cursor-pointer">
            {location.state.quizzd}
          </p>
        </div>

        <div className="w-full max-w-[80rem] mx-auto mt-5 pb-4 rounded-sm px-2">
          <div
            className={`flex items-center justify-between z-20 rounded-md  sticky top-0 ${
              scrolled == true ? "bg-white  px-2 py-3" : ""
            }`}
          >
            <h3>
              <span className="font-bold">{quizz.length} Câu hỏi</span> (
              {quizz.length * 100} đ)
            </h3>
            <button
              className="text-lilac h-8 flex hover:bg-white transition duration-150 ease-out hover:ease-in items-center border-lilac-light bg-lilac-faded px-3 rounded-md border-1"
              onClick={() => {
                naviget(`/admin/addbai/${param.id}`, {
                  state: {
                    data: location,
                  },
                });
              }}
            >
              <i classname="fa-solid fa-plus mr-2"></i>
              Thêm câu hỏi
            </button>
          </div>
          <br />
          {quizz &&
            quizz.length > 0 &&
            quizz.map((quizz, index) => {
              return (
                <>
                  {isdelete == quizz.id ? (
                    <div className="relative" ref={buttonRef}>
                      <div className=" w-72 pb-[110px]  rounded-xl">
                        <div className="absolute -right-28 bg-white border-1 border-slate-200 p-3 z-10 rounded-md">
                          <div className="flex items-center gap-2 pb-4">
                            <div className="bg-red-200 p-2 rounded-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="red"
                                classname="bi bi-trash"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                              </svg>
                            </div>

                            <span className="text-sm  block">
                              Bạn có chắc chắn muốn xóa câu hỏi này?
                            </span>
                          </div>
                          <div className=" flex justify-end text-[13px] gap-3">
                            <button
                              className="px-2 h-7 flex items-center rounded-sm "
                              style={{ backgroundColor: "#0909090d" }}
                              onClick={() => {
                                setdelete(false);
                              }}
                            >
                              Hủy
                            </button>
                            <button
                              className="bg-red-100 h-7 px-2 rounded-sm  text-red-500 flex items-center"
                              onClick={() => handledelete(quizz.id)}
                            >
                              Xóa
                            </button>
                          </div>
                        </div>
                      </div>
                      <div classname="triangle"></div>
                    </div>
                  ) : (
                    ""
                  )}

                  <div
                    className="border-solid bg-white border-2 rounded-md p-3"
                    key={`${index}-quizz`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <i
                          className="fa-regular fa-square-check text-green-400 
                       pr-2"
                        ></i>
                        <span className="font-medium text-[15px]">
                          {index + 1}:Nhiều lựa chọn
                        </span>
                      </div>
                      {isdelete == quizz.id ? "" : ""}

                      <div className="flex gap-2 relative">
                        <button
                          className=" flex items-center justify-center px-3  text-xs font-semibold border border-solid  rounded  text-dark-3 white relative min-w-max  !py-0 !h-6 "
                          onClick={() =>
                            naviget(`../admin/updateansewn`, {
                              state: {
                                index: Number(index),
                                id: Number(param.id),
                                quizz: Number(quizz.id),
                              },
                            })
                          }
                        >
                          <i classname="bi bi-pen flex items-center mr-2"></i>
                          <span className="title" title="Chỉnh sửa">
                            Chỉnh sửa
                          </span>
                        </button>

                        <button
                          className=" flex items-center  justify-center px-2  text-xs font-semibold border border-solid  rounded  text-dark-3 white  min-w-max  !py-0 !h-6 "
                          // onClick={() => handledelete(quizz.id)}
                          onClick={() => handled(quizz.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            classname="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center py-1">
                      {quizz.imageFile !== "" && (
                        <img
                          src={`data:image/jpeg;base64,${quizz.imageFile}`}
                          className="max-w-[130px] pr-4 pb-4 pt-2"
                          alt=""
                        />
                      )}
                      <div className=" font-semibold">{quizz.description}</div>
                    </div>
                    <div className=" grid grid-cols-2 max-[810px]:grid-cols-1">
                      {quizz.answers &&
                        quizz.answers.length > 0 &&
                        quizz.answers.map((answer, indexs) => {
                          return (
                            <div key={indexs}>
                              <div className="flex items-center mb-2 w-1/2  gap-2">
                                {answer.isCorrect == true ? (
                                  <i className="fa-solid fa-check  text-green-500"></i>
                                ) : (
                                  <i className="fa-solid fa-x text-red-400"></i>
                                )}

                                <span className="text-[14px] font-medium">
                                  {answer.description}
                                </span>
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
};

export default Questions;
