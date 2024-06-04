import React, { useEffect, useState } from "react";
import { Getquizz } from "../../Server/ApiServer";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
const Quizz = (props) => {
  const [arrQuizz, setarrQuizz] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    getQuizz();
  }, []);

  const getQuizz = async () => {
    const res = await Getquizz();

    if (res.data.EC === 0) {
      setLoading(true);

      setarrQuizz(res.data.DT);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 px-3">
        {isLoading == false ? <Loading></Loading> : ""}
        {arrQuizz &&
          arrQuizz.length > 0 &&
          arrQuizz.map((quizz, index) => {
            return (
              <div
                key={index}
                className="cart  hover:shadow-md rounded-xl border-solid border-2 w-[300px] mx-auto mt-20"
              >
                <div className="hover:text-black">
                  <div className="relative w-full h-0 pb-[64%]">
                    <div className=" absolute left-0 w-full top-0 h-full ">
                      <img
                        src={`data:image/jpeg;base64,${quizz.image}`}
                        className="w-[19rem] h-full rounded max-w-full object-cover mx-auto relative -z-10"
                        alt=""
                      />
                    </div>
                  </div>
                  <br />
                  <h3 className="pb-5  pl-3 font-semibold text-[1rem] flex items-center flex-col ">
                    {quizz.description}
                  </h3>
                  <div className="phus mt-2">
                    <button
                      className="m-auto p-2 rounded-lg block bg-cyan-500 detail"
                      onClick={() =>
                        navigate(`/quizz/${quizz.id}`, {
                          state: {
                            quizzd: quizz.description,
                            img: quizz.image,
                            id: quizz.id,
                          },
                        })
                      }
                    >
                      Detail Quizz
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {arrQuizz.length === 0 ? (
        <div className="w-full  px-3 absolute top-[30%] flex flex-col justify-center items-center  ">
          <img
            className="max-w-[300px]"
            src="https://cf.quizizz.com/image/emptystate-questions.png"
            alt=""
          />
          <p className="font-semibold">
            Không có câu chuyện hoặc bài học đã được chia sẻ với bạn
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Quizz;
