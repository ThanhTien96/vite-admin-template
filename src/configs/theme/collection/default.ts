import { ThemeConfig, theme } from "antd";

const { defaultAlgorithm } = theme;

const instance: ThemeConfig = {
  algorithm: [defaultAlgorithm],
  token: {
  },
  components: {
    Layout: {
      headerBg: "#ffffff",
      triggerBg: "#cdcdcd",
      siderBg: "#ffffff"
    },
  },
};

export default instance;
