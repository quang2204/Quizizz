import React from "react";
import { Histor } from "../../Server/ApiServer";
import { useEffect } from "react";
import { useState } from "react";
import moment from "moment";
const History = () => {
  const [history, sethistory] = useState("");
  const [time, settime] = useState("");
  useEffect(() => {
    Histo();
  }, []);
  const Histo = async () => {
    const res = await Histor();
    if (res.data.EC === 0) {
      sethistory(res.data.DT.data);
      settime(res.data.DT.data.createdAt);
    }
    console.log(history);
    <div className=""></div>;
  };
  const formattedTime = moment(time).format("DD-MM-YYYY HH:mm:ss");
  console.log(formattedTime);
  return (
    <div>
      <div className="pt-5 px-5">
        <div className="pb-3 flex flex-col gap-3">
          {history &&
            history.length > 0 &&
            history.map((item, index) => {
              return (
                <div
                  className="flex items-center justify-between border-solid border-2 pl-6 py-3 gap-3 rounded-md "
                  key={index}
                >
                  <div className="flex flex-col gap-[6px] w-full">
                    <div className="text-black font-bold pb-2">STT</div>
                    <div className="text-black font-medium">{index + 1}</div>
                  </div>
                  <div className="flex flex-col gap-[6px] w-full">
                    <div className="text-black font-bold pb-2">Quizz name</div>
                    <div className="text-black font-medium">
                      {item.quizHistory.name}
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px] w-full">
                    <div className="text-black font-bold pb-2">
                      Total_questions
                    </div>
                    <div className="text-black font-medium">
                      {item.total_questions}
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px] w-full">
                    <div className="text-black font-bold pb-2">
                      Total_correct
                    </div>
                    <div className="text-black font-medium">
                      {item.total_correct}
                    </div>
                  </div>

                  <div className="flex flex-col gap-[6px] w-full">
                    <div className="text-black font-bold pb-2">Date</div>
                    <div className="text-black font-medium">
                      {formattedTime}
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px] w-full">
                    <div className="text-black font-bold pb-2">Tổng Điểm</div>
                    <div className="text-black font-medium">
                      {item.total_correct * 100} đ
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default History;
