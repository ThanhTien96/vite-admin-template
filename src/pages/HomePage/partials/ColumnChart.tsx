
import { Column } from "@ant-design/plots";
import data from "./data";

const ColumnChart = () => {

  const chartConfig = {
    data: data.columnData,
    isGroup: true,
    xField: 'month',
    yField: 'value',
    seriesField: 'name',
    color: ['#1ca9e6', '#f88c24'],
    marginRatio: 0.1,
    label: {
    //   position: 'middle',
      // 'top', 'middle', 'bottom'
      layout: [
        {
          type: 'interval-adjust-position',
        }, 
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return (
    <Column style={{height: 300}} {...chartConfig} />
  );
};

export default ColumnChart;
