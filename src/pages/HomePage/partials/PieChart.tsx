import { Pie, PieConfig, measureTextWidth } from "@ant-design/plots";
import data from "./data";

function renderStatistic(containerWidth: number, text: string, style: any) {
  const { width: textWidth, height: textHeight } = measureTextWidth(
    text,
    style,
  );
  const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

  let scale = 1;

  if (containerWidth < textWidth) {
    scale = Math.min(
      Math.sqrt(
        Math.abs(
          Math.pow(R, 2) /
            (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)),
        ),
      ),
      1,
    );
  }

  const textStyleStr = `width:${containerWidth}px;`;
  return `<div style="${textStyleStr};font-size:${scale}em;line-height:${
    scale < 1 ? 1 : "inherit"
  };">${text}</div>`;
}

const PieChart = () => {
  const pieConfig: PieConfig = {
    appendPadding: 10,
    data: data.pieData,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.64,
    style: {
      height: 190,
    },
    meta: {
      value: {
        formatter: (v) => `${v} ¥`,
      },
    },
    legend: {
      label: {
        // style: {
        //   fill: "#fff",
        // },
      },
    },
    locale: "en-US",
    autoFit: true,
    label: {
      type: "inner",
      offset: "-50%",
      style: {
        textAlign: "center",
        color: "#fff",
      },
      autoRotate: false,
      content: "{value}",
    },
    statistic: {
      title: {
        style: {
          color: "#fff",
        },
        offsetY: -4,
        customHtml: (container, view, datum) => {
          const { width, height } = container.getBoundingClientRect();
          const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          const text = datum ? datum.type : "Total";
          return renderStatistic(d, text, {
            fontSize: 28,
          });
        },
      },
      content: {
        offsetY: 4,
        style: {
          fontSize: "18px",
          color: "#fff",
        },
        customHtml: (container, view, datum, xdata) => {
          const { width } = container.getBoundingClientRect();
          const text = datum
            ? `¥ ${datum.value}`
            : `¥ ${(xdata || []).reduce((r, d) => r + d.value, 0)}`;
          return renderStatistic(width, text, {
            fontSize: 18,
          });
        },
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
      {
        type: "pie-statistic-active",
      },
    ],
  };

  return <Pie {...pieConfig} />;
}

export default PieChart;
