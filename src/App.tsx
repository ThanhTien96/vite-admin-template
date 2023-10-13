import {
  HelmetProvider,
  Router,
  StoreProvider,
  ThemeProvider,
} from "components/wrapper";
import "./styles/App.less";
import { pagePaths } from "constants";

function App() {
  return (
    <StoreProvider>
      <HelmetProvider>
        <ThemeProvider>
          <Router defaultRoute={pagePaths.home} />
        </ThemeProvider>
      </HelmetProvider>
    </StoreProvider>
  );
}

export default App;
