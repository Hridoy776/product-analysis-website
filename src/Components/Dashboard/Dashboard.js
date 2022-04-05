import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  Line,
  Legend,
  Tooltip,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Label,
} from "recharts";

const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div className="d-lg-flex container mx-auto my-5 flex-wrap">
      <div>
        <LineChart
          width={350}
          height={250}
          data={datas}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div>
        <AreaChart
          width={350}
          height={250}
          data={datas}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" ><Label value="sell per month" offset={0} position="insideBottom" /></XAxis>
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
          
            type="monotone"
            dataKey="sell"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          
        </AreaChart>
      </div>
      <div>
        <BarChart width={350} height={250} data={datas}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
      <div>
        <PieChart width={350} height={250}>
          <Pie
            data={datas}
            dataKey="sell"
            nameKey="investment"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={datas}
            dataKey="sell"
            nameKey="month"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
