import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValues);

  const chartContent = props.dataPoints.map((dataPoint, i) => {
    return (
      <ChartBar
        key={`chartBar_${i}`}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
      />
    );
  });

  return <div className="chart">{chartContent}</div>;
};

export default Chart;
