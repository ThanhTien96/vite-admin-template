import { Statistic, theme } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Column } from "@ant-design/plots";
import data from "./data";

const { useToken } = theme;

const ColumnChart = () => {
  const config = useToken();
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
    <div>
      <Statistic
        title="Active"
        value={11.28}
        precision={2}
        valueStyle={{ color: config.token.colorSuccess }}
        prefix={<ArrowUpOutlined />}
        suffix="%"
      />
      <Column {...chartConfig} />
    </div>
  );
};

export default ColumnChart;
