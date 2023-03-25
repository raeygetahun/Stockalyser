import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell,Tooltip  } from "recharts";
import data from  './portfolio';

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
//   { name: "Group F", value: 100 }
// ];

const COLORS = ["#FFEC21","#FFA32F","#F54F52","#0088FE","#93F03B","#9552EA",
 "#00C49F", "#FFBB28", "#FF8042","#000000"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      <title>{`${name} (${(percent * 100).toFixed(0)}%)`}</title>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Piechart() {
  return (
    <>
    <h2 className="yourstock">
        Your Stocks
      </h2>
    <div className="chart-container">
<table>
        <thead>
          <tr>
            <th >Stock</th>
            <th >Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.value}>
              <td >{item.name}</td>
              <td >{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    <PieChart width={400} height={400}>
      <Tooltip />
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </div>
    </>
  );
}
