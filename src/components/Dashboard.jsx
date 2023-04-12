import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  Tooltip,
  Legend,
} from "recharts";
import s from "./main.module.css";
import search from "./png/search2.png";
import revenue from "./png/revenue.svg";
import transactions from "./png/transactions.svg";
import likes from "./png/likes.svg";
import people from "./png/people.svg";
import Chart from "react-apexcharts";
import downarrow from "./png/downarrow.svg";
import bell2 from "./png/bell.svg";
import profilepic from "./png/profilepic.svg";
import axios from "axios";
const Dashboard = () => {
  let [data1, setData1] = useState([]);
  // const data1 = [
  //   { x: "0", y: 0, guest: 200, user: 100 },
  //   { x: "week1", y: 100, guest: 390, user: 410 },
  //   { x: "week2", y: 200, guest: 200, user: 150 },
  //   { x: "week3", y: 300, guest: 300, user: 420 },
  //   { x: "week4", y: 400, guest: 220, user: 180 },
  //   { x: "", y: 500, guest: 390, user: 410 },
  // ];

  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/DEFRO5/database/main/db.json")
      .then((response) => {
        setData1(response.data.content);
      });
  }, []);

  const yTicks = [0, 100, 200, 300, 400, 500];
  const data = {
    series: [55, 31, 14],

    options: {
      chart: {
        type: "pie",
      },

      labels: ["Basic tees", "Custom short pants", "Super hoddies"],
      colors: ["rgb(152,216,158)", "rgb(238,132,132)", "rgb(246,220,125)"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      legend: {
        labels: {
          useSeriesColors: true,
        },
      },
    },
  };
  return (
    <div id={s.dashboard}>
      <div id={s.header}>
        <div id={s.title}>
          <h3>Dashboard</h3>
        </div>
        <div id={s.gap_div}></div>
        <div id={s.search_div}>
          <input type="text" placeholder="     Search..." />
          <img src={search} alt="" />
        </div>
        <div id={s.propic}>
          <img src={bell2} alt="" id={s.bellicon} />
          <img src={profilepic} alt="" id={s.profileicon} />
        </div>
      </div>
      <div id={s.mainstats_div}>
        <div id={s.mainstat1} className={s.mainstat}>
          <img src={revenue} alt="" />
          <p>Total Revenues</p>
          <h2>$2,129,430</h2>
        </div>
        <div id={s.mainstat2} className={s.mainstat}>
          <img src={transactions} alt="" />
          <p>Total Transactions</p>
          <h2>1520</h2>
        </div>
        <div id={s.mainstat3} className={s.mainstat}>
          <img src={likes} alt="" />
          <p>Total Likes</p>
          <h2>9721</h2>
        </div>
        <div id={s.mainstat4} className={s.mainstat}>
          <img src={people} alt="" />
          <p>Total Users</p>
          <h2>892</h2>
        </div>
      </div>
      <div id={s.curvechart_div}>
        <h2>Activities</h2>
        <span>
          May-june 2021 <img src={downarrow} alt="" />
        </span>
        <div>
          <LineChart
            width={1000}
            height={250}
            data={data1}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="x" axisLine={false} tickLine={false} />
            <YAxis ticks={yTicks} axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={10}
            />
            <Line
              type="monotone"
              dataKey="guest"
              stroke="rgb(233,170,170)"
              dot={false}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="user"
              dot={false}
              stroke="rgb(155,221,124)"
              strokeWidth={2}
            />
            {yTicks.map((tick) => (
              <ReferenceLine y={tick} stroke="rgb(230,230,230)" />
            ))}
          </LineChart>
        </div>
      </div>
      <div id={s.verylast_div}>
        <div id={s.piechart_div}>
          <h2>Top products</h2>
          <span id={s.kk}>
            May-June 2021
            <img src={downarrow} alt="" />
          </span>
          <h6 id={s.per1}>{data.series[0]}%</h6>
          <h6 id={s.per2}>{data.series[1]}%</h6>
          <h6 id={s.per3}>{data.series[2]}%</h6>
          <div id={s.pie}>
            <Chart
              options={data.options}
              series={data.series}
              type="pie"
              height={350}
            />
          </div>
        </div>
        <div id={s.schedule_div}>
          <h2>Today's schedule</h2>
          <span>See all {">"}</span>
          <div id={s.schedule1}>
            <h5>Meeting with suppliers from Kuta Bali</h5>
            <p>14.00-15.00</p>
            <p>at Sunset Road,Kuta,Bali</p>
          </div>
          <div id={s.schedule2}>
            <h5>Check operation at Giga Factory 1</h5>
            <p>18.00-20.00</p>
            <p>at Central Jakarta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
