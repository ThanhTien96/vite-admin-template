import { Router, StoreProvider, ThemeProvider } from "components/wrapper";
import "./styles/App.scss";
import { pagePath } from "constants";

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Router defaultRoute={pagePath.home} />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
