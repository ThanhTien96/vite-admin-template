import { TinyArea, TinyAreaConfig } from "@ant-design/plots";
import { Statistic, theme } from "antd";
import data from "./data";
import { ArrowUpOutlined } from "@ant-design/icons";

const { useToken } = theme;
const TinyChart = () => {
  const config = useToken();
  const chartConfig: TinyAreaConfig = {
    autoFit: true,
    data: data.tinyChart,
    smooth: true,
    height: 120,
    areaStyle: {
      fill: "l(270) 0:#3f4752 0.5:#2d333b 1:#1c2128",
    },
    line: {
      color: "#1c2128",
    },
  };
  return (
    <>
      <Statistic
        value={11.28}
        title="Tiny Chart"
        precision={2}
        valueStyle={{ color: config.token.colorSuccess }}
        prefix={<ArrowUpOutlined />}
        suffix="%"
      />
      <TinyArea {...chartConfig} />
    </>
  );
};

export default TinyChart;
