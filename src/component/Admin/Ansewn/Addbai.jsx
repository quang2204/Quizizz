import _ from "lodash";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addquestion, Addanswer } from "../../../Server/ApiServer";
import { useNavigate, useParams, NavLink, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

// import "./ansewn.css";
function Addbai() {
  const [cauhoi, setCauhoi] = useState("");
  const [overflow, setoverflow] = useState(false);
  const [overflows, setoverflows] = useState(false);
  const [check, setcheck] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [image, setImage] = useState(null);
  const [height, setheight] = useState(null);
  const fileInputRef = React.useRef(null);
  const navigate = useNavigate();
  const param = useParams();
  const handleClick = () => {
    fileInputRef.current.click();
  };
  const location = useLocation();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    setImage(file);
  };

  const handleChange = (event) => {
    setCauhoi(event.target.value);

    if (cauhoi.length >= 888) {
      setoverflow(true);
    } else {
      setoverflow(false);
    }
    console.log(cauhoi.length);
  };
  const handleCauhoi = (questionid, event) => {
    const questionclones = _.cloneDeep(questions);
    let index = questionclones.findIndex((item) => item.id === questionid);
    if (index > -1) {
      questionclones.map((answers) => {
        if (answers.id == questionid) {
          answers.description = event;
        }
        if (answers.description.length > 0) {
          answers.check = true;
        } else {
          answers.check = false;
        }
        // console.log(answers.check.length);
      });
      setquestions(questionclones);
    }
    // if (traloi.length >= 140) {
    //   setoverflows(true);
    // } else {
    //   setoverflows(false);
    // }
  };

  const submit = async () => {
    if (_.isEmpty(check)) {
      toast.error("Chưa chọn đáp án");
      return;
    }
    const questionsd = questions.filter(
      (question) => question.description.trim() !== ""
    );
    if (cauhoi.length === 0) {
      toast.error("Chưa chọn câu hỏi");
      return;
    }
    if (questionsd.length === 1) {
      toast.error("Phải có 2 câu trả lời");
      return;
    }
    const datas = [
      {
        description: cauhoi,
        quiz_id: param.id,
        img: image,
      },
    ];
    for (const data of datas) {
      const q = await addquestion(data.quiz_id, data.description, data.img);
      for (const answers of questionsd) {
        await Addanswer(answers.description, answers.isCorrect, q.data.DT.id);
      }
    }
    navigate(`../admin/question/${param.id}`, {
      replace: true,
      state: { data: location.state.data },
    });
  };
  const handclick = (type, index, questionid) => {
    if (type == true) {
      const questionclones = _.cloneDeep(questions);
      let indexs = questionclones.findIndex((item) => item.id === questionid);
      if (indexs > -1) {
        questionclones.map((answers) => {
          if (answers.id == questionid) {
            answers.isCorrect = true;
            setcheck(questionid);
          } else {
            answers.isCorrect = false;
          }
        });
        setquestions(questionclones);
      }
    }
    if (type == false) {
      toast.error("Please add text to mark it correct");
    }
    console.log(type);
  };
  const [questions, setquestions] = useState([
    {
      id: uuidv4(),
      description: "",
      isCorrect: false,
      check: false,
    },
    {
      id: uuidv4(),
      description: "",
      isCorrect: false,
      check: false,
    },
    {
      id: uuidv4(),
      description: "",
      isCorrect: false,
      check: false,
    },
    {
      id: uuidv4(),
      description: "",
      isCorrect: false,
      check: false,
    },
  ]);
  const handadd = (type, id) => {
    if (type == "add") {
      const newquesion = {
        id: uuidv4(),
        description: "",
        isCorrect: false,
        check: false,
      };
      setquestions([...questions, newquesion]);
    }
  };
  const handremove = (type, id) => {
    if ((type = "remove")) {
      let questionclone = questions;
      questionclone = questions.filter((item) => item.id != id);
      setquestions(questionclone);
    }
  };

  return (
    <>
      <div>
        <div className="p-3 flex justify-between bg-white border-b-2 border-gray-200 ">
          <div className="flex gap-2">
            <button
              className="  rounded h-7 w-1 flex justify-center px-3 items-center"
              style={{ backgroundColor: "#0909090d" }}
              onClick={() =>
                navigate(`../admin/question/${param.id}`, {
                  state: {
                    data: location.state.data,
                  },
                })
              }
            >
              <i
                className="flex items-center fas fa-chevron-left "
                style={{ fontSize: "12px" }}
              ></i>
              <span data-v-37969509="" className="title" title=""></span>
            </button>
            <div
              className="px-2 rounded-sm"
              style={{ backgroundColor: "#0909090d" }}
            >
              <i className="fa-regular fa-square-check bg-green-500 text-white mr-2"></i>
              <span className="text-xs"> Lựa chọn</span>
            </div>
          </div>
          <div className="flex gap-2">
            <div
              className="px-2 rounded-sm"
              style={{ backgroundColor: "#0909090d" }}
            >
              <i className="fa-solid fa-check text-xs"></i>
              <span className="text-xs font-semibold"> 100 đ</span>
            </div>
            <div
              className="text-xs px-2 h-7 text-white cursor-pointer flex justify-center items-center  font-semibold rounded-sm"
              style={{ backgroundColor: "rgba(136,84,192)" }}
              onClick={() => submit()}
            >
              Lưu câu hỏi
            </div>
          </div>
        </div>
        <div className=" pt-2 overflow-hidden pb-[6px]">
          <div className="max-w-[1064px] mx-auto px-2 ">
            <div
              className="text-white rounded-xl px-3 pb-[7px]"
              style={{ backgroundColor: "rgba(70,26,66)" }}
            >
              <br />
              <div
                className="border-solid border-1 rounded w-full h-full "
                style={{ borderColor: "rgb(136 136 136)" }}
              >
                <div className="p-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <div
                    className="py-1 rounded-md px-2 max-w-[33px] flex justify-center"
                    style={{ backgroundColor: "#fff3" }}
                    onClick={handleClick}
                  >
                    <i className="fa-regular fa-image text-base"></i>
                  </div>
                </div>

                <div className="h-full ">
                  <div
                    className="input w-full h-full flex items-center max-[1006px]:flex-col"
                    style={{ textAlign: "center" }}
                  >
                    {imageUrl && (
                      <div className="max-w-[200px] ml-3">
                        <img src={imageUrl} alt="Selected" />
                      </div>
                    )}

                    <textarea
                      placeholder="Nhập câu trả lời ở đây"
                      className={`w-full text-center resize-none bg-transparent rounded-md text-xl max-h-[252px]  ${
                        overflow
                          ? "overflow-auto h-[252px]"
                          : "overflow-hidden py-28 max-[1006px]:py-16"
                      }  `}
                      onChange={handleChange}
                      value={cauhoi}
                      style={{ outline: "none" }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex gap-[8px] max-[1006px]:gap-3 w-full h-full max-[1006px]:flex-col sm:w-[calc(100%/var(--totalOptions))]  pb-[14px] theme">
                  {questions.length > 0 &&
                    questions.map((question, index) => {
                      return (
                        <div
                          key={question.id}
                          className="theme-classic max-[1006px]:flex max-[1006px]:flex-row-reverse cursor-text  relative h-[250px]   max-[1006px]:h-[100px] "
                        >
                          <div className=" p-2 ">
                            <div className="text-[12px] flex items-center justify-between max-[1006px]:flex-col max-[1006px]:gap-3">
                              {questions.length > 2 ? (
                                <div
                                  onClick={() =>
                                    handremove("remove", question.id)
                                  }
                                  style={{ backgroundColor: "#fff3" }}
                                  className="w-6 py-1 rounded-md flex justify-center"
                                >
                                  <i className="bi bi-trash3-fill"></i>
                                </div>
                              ) : (
                                ""
                              )}
                              <div
                                className={`px-2 py-1 rounded-full border-2 check ${
                                  question.id === check ? "active" : ""
                                }`}
                                onClick={() =>
                                  handclick(question.check, index, question.id)
                                }
                              >
                                <i className="fa-solid fa-check text-[11px]"></i>
                              </div>
                            </div>
                          </div>
                          <div className="w-[98%] max-[1006px]:w-[93%] mx-auto ml-auto h-[100%] max-[1006px]:mt-4 ">
                            <textarea
                              className={`editableDiv1 resize-none  w-full    word-wrap-break-word bg-transparent text-xl  text-center text-white h-[80%]  ${
                                overflows
                                  ? "overflow-auto py-2 "
                                  : "overflow-hidden py-20 max-[1006px]:pb-[0px] max-[1006px]:pt-7"
                              }`}
                              placeholder="Nhập tùy chọn trả lời ở đây"
                              style={{ outline: "none" }}
                              onChange={(event) =>
                                handleCauhoi(question.id, event.target.value)
                              }
                              value={question.description}
                            ></textarea>
                          </div>
                        </div>
                      );
                    })}
                  {questions.length < 5 ? (
                    <div
                      className="m-auto px-2 py-2 rounded-md items-center flex justify-center max-[1006px]:w-full"
                      style={{ backgroundColor: "#fff3" }}
                      onClick={() => handadd("add")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        classname="bi bi-plus font-bold"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                      </svg>
                      <div className="font-semibold hidden max-[1006px]:block">
                        Thêm tùy chọn
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </>
  );
}

export default Addbai;
