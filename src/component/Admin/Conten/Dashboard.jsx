import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GetDashboard } from "../../../Server/ApiServer";
import { useEffect } from "react";
import { useState } from "react";
const Dashboard = () => {
  const [data, setdata] = useState();
  useEffect(() => {
    Fetchdashboard();
  }, []);
  const Fetchdashboard = async () => {
    const res = await GetDashboard();
    console.log(res.data.DT.others);
    let Qz = 0,
      Qs = 0,
      As = 0;
    Qz = res.data.DT.others.countQuiz;
    Qs = res.data.DT.others.countQuestions;
    As = res.data.DT.others.countAnswers;

    const datas = [
      {
        name: "Quizz",
        uv: Qz,
      },

      {
        name: "Questions",
        uv: Qs,
      },
      {
        name: "Answers",
        uv: As,
      },
    ];
    setdata(datas);
  };
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          //   width={1030}
          //   height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          {/* <CartesianGrid strokeDasharray=" 0" /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
