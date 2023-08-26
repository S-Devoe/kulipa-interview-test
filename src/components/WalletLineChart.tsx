"use client";
const PRIMARY_COLOR = "#2A60F1";


import { convertToCurrency } from "@/utils";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataItem {
  name: string;
  Amount: number;
}

const data: DataItem[] = [
  {
    name: "Jan",
    Amount: 150000,
  },
  {
    name: "Feb",
    Amount: 200000,
  },
  {
    name: "Mar",
    Amount: 30000,
  },
  {
    name: "Apr",
    Amount: 47800,
  },
  {
    name: "May",
    Amount: 10000,
  },
  {
    name: "Jun",
    Amount: 15000,
  },
  {
    name: "Jul",
    Amount: 4000,
  },
  {
    name: "Aug",
    Amount: 40000,
  },
  {
    name: "Sep",
    Amount: 30000,
  },
  {
    name: "Oct",
    Amount: 20000,
  },
  {
    name: "Nov",
    Amount: 278000,
  },
  {
    name: "Dec",
    Amount: 500090,
  },
];

const CustomYAxisTick: React.FC<any> = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text
      x={0}
      y={0}
      dy={5}
      textAnchor="end"
      fill="#666"
      className="text-[0.5625rem]  "
    >
      {payload.value}
    </text>
  </g>
);

const WalletLineChart = () => {
  return (
    <div className="w-full h-full ">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="" vertical={false} />
          <XAxis tickLine={false} dataKey="name" />
          <YAxis
            width={35}
            axisLine={false}
            tickLine={false}
            tick={<CustomYAxisTick />}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            align="right"
            verticalAlign="top"
            iconSize={8}
            iconType="circle"
          />

          <Line
            type="monotone"
            dataKey="Amount"
            stroke={PRIMARY_COLOR}
            strokeWidth={1.67}
            dot={false}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default WalletLineChart;

const CustomTooltip: React.FC<any> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-primary w-fit h-fit rounded-lg py-[0.5rem] px-[1rem] text-white">
        <p className="font-normal text-[0.6rem] text-white ">{`${payload[0].payload?.name}`}</p>
        <p className="font-medium text-[0.95rem] text-white ">{`${convertToCurrency(
          Number(payload[0]?.payload?.Amount)
        )}`}</p>
      </div>
    );
  }

  return null;
};
