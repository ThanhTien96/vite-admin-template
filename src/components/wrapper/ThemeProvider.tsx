import { useAppSelector } from "store";
import { useMemo } from "react";
import { themes } from "configs";
import { Global } from "@emotion/react";
import { ConfigProvider } from "antd";
export interface ThemeProviderProps {
  children?: React.ReactNode;
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
  const {
    selected: selectedThemeKey,
    colorPrimary,
    ...resProps
  } = useAppSelector((state) => state.app.theme);

  const selectedTheme = useMemo(
    () => ({
      ...themes[selectedThemeKey],
      token: {
        ...themes[selectedThemeKey].token,
        colorPrimary,
      },
    }),
    [selectedThemeKey, colorPrimary]
  );
  console.log("☣️ >>> ThemeProvider >>> selectedTheme: ", selectedTheme)
  return (
    <>
      <Global
        styles={{
          ".ant-layout-sider-trigger": {
            backgroundColor:
              selectedTheme && selectedTheme.components?.Layout?.colorBgTrigger,
          },
        }}
      />
      <ConfigProvider {...resProps} theme={selectedTheme} >
        {children}
      </ConfigProvider>
    </>
  );
};

export default ThemeProvider
