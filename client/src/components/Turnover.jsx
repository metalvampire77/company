import React from "react";
import "./Turnover.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales"],
  ["2004", 1000],
  ["2005", 1170],
  ["2006", 660],
  ["2007", 1030],
];

const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
  backgroundColor: "#f0e6ed",
};

function Turnover() {
  return (
    <div className="turnover">
      <div className="containerTurnover">
        <h1 className="heading">Turnover</h1>
        <div style={{ borderRadius: "10px", overflow: "hidden" }}>
          <Chart
            chartType="LineChart"
            width="100%"
            height="300px"
            data={data}
            options={options}
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Turnover;
