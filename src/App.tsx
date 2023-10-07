import { Router, StoreProvider, ThemeProvider } from "components/wrapper";
import "./styles/App.less";
import { pagePaths } from "constants";

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Router defaultRoute={pagePaths.home} />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
