import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
import { Getquizzid, quizzsubmit } from "../../Server/ApiServer";
import _ from "lodash";
import { useDispatch } from "react-redux";
import Loading from "../Loading";

import Question from "./Question";
import { data } from "autoprefixer";
import { submitQuiz } from "../../redux/action/useAction";
const Detail_quizz = () => {
  const param = useParams();
  const [quizDataLength, setQuizDataLength] = useState(0);
  const [quizz, setquizz] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const quizzid = param.id;
  const navigate = useNavigate();
  const [time, setTime] = useState(300);
  const [runtime, setruntime] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      }
      if (time == 0) {
        handsubmit();
        navigate(`/summary/${quizzid}`, {
          state: {
            data: quizz,
          },
        });
      }
    }, 1000);
    setruntime(runtime + 0.3);

    return () => clearTimeout(timer);
  }, [time]);
  useEffect(() => {
    fethquizz();
  }, [quizzid]);
  const fethquizz = async () => {
    const res = await Getquizzid(quizzid);

    if (res.data.EC == 0) {
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
            item.answers.isSelect = false;
          });

          return { questionid: key, answers, questiondescription, img };
        })
        .value();
      setQuizDataLength(data.length);
      setquizz(data);
      console.log(data);
    }
  };
  const handpre = () => {
    if (index - 1 < 0) return;
    setIndex(index - 1);
  };
  const handnext = () => {
    if (quizz.length > index + 1) setIndex(index + 1);
  };
  const handcheck = (answerid, questionId) => {
    let dataQuizzClone = _.cloneDeep(quizz);
    let question = dataQuizzClone.find(
      (item) => +item.questionid === +questionId
    );

    if (question && question.answers) {
      let b = question.answers.map((item) => {
        if (+item.id === +answerid) {
          item.isSelect = true;
        } else {
          item.isSelect = false;
        }
        return item;
      });

      question.answers = b;
    }
    let index = dataQuizzClone.findIndex(
      (item) => +item.questionid === +questionId
    );
    if (index > -1) {
      dataQuizzClone[index] = question;
      setquizz(dataQuizzClone);
    }
  };
  const dispatch = useDispatch();
  // setLoading(true);

  const handsubmit = async () => {
    setLoading(true);
    let payload = {
      quizId: +quizzid,
      answers: [],
    };
    let answers = [];
    if (quizz && quizz.length > 0) {
      quizz.forEach((question) => {
        let questionId = question.questionid;
        let userAnswerId = [];
        question.answers.forEach((a) => {
          if (a.isSelect === true) {
            userAnswerId.push(a.id);
          }
        });
        answers.push({
          questionId: +questionId,
          userAnswerId: userAnswerId,
        });
      });
      payload.answers = answers;
      try {
        let res = await quizzsubmit(payload);
        dispatch(submitQuiz(res.data.DT));
        navigate(`/summary/${quizzid}`, {
          state: {
            data: quizz,
          },
        });
        setLoading(false);
      } catch (error) {
        console.error("Error submitting quiz:", error);
      }
    }
  };
  return (
    <div className="bg-black w-full h-[100vh] text-white overflow-hidden">
      {isLoading == true ? <Loading></Loading> : ""}

      <div className="flex text-white py-2 px-3 justify-between ">
        <div className="flex gap-3">
          <div
            className=" text-sm md:text-base relative whitespace-nowrap min-w-fit overflow-hidden rounded-lg "
            style={{ backgroundColor: "rgb(208 195 195 / 20%)" }}
          >
            <div className=" w-full h-full">
              <div className="px-2 md:px-3 py-1.5 md:py-2 z-40 relative text-ds-light-500-30">
                Phần thưởng tốc độ
              </div>
            </div>
            <div className="absolute bottom-0 w-full h-[3px] "></div>
            <div
              className="actionBar absolute bottom-0 w-full h-[3px] bg-ds-light-500 z-1"
              style={{ transform: `translateX(-${runtime}%)` }}
            ></div>
          </div>
          <div
            className="px-3 py-[5px] rounded-md flex items-center"
            style={{ backgroundColor: "rgb(208 195 195 / 20%)" }}
          >
            {index + 1}/{quizDataLength}
          </div>
        </div>
        <button
          className="flex items-center finish px-3 text-white hover:bg-sky-500 rounded-md cursor-pointer text-[22px] py-1"
          onClick={() => {
            handsubmit();
          }}
        >
          <span>Finish</span>
        </button>
      </div>
      <div
        style={{ backgroundColor: "#461a42", height: "100%" }}
        className="w-full block text-center pt-4  rounded-t-lg"
      >
        <Question
          index={index}
          data={quizz[index]}
          handcheck={handcheck}
        ></Question>
        <div className="text-right pr-4 pb-[2.5px] gap-3 flex justify-end">
          <button onClick={() => handpre()}>
            <i
              className={`bi bi-caret-left-fill   bg-slate-400 px-2 py-[2px] rounded-md text-[25px] ${
                index - 1 < 0 ? "opacity-[0.4]" : ""
              }`}
            ></i>
            <br />
            <span className="text-xs">Quay lại</span>
          </button>
          <button onClick={() => handnext()}>
            <i
              className={`bi bi-caret-right-fill bg-slate-400 px-2 py-[2px] rounded-md text-[25px] ${
                quizz.length < index + 2 ? "opacity-[0.4]" : ""
              }`}
            ></i>
            <br />
            <span className="text-xs">Tiếp tục</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail_quizz;
