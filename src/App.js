import ListHeader from "./components/ListHeader";
import ListCard from "./components/ListCard";
import Main from "./components/Main";
import ColumnBox from "./components/ColumnBox";
import Dashboard from "./components/Dashboard";
import TopBar from "./components/TopBar";

import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <Main />
    </CookiesProvider>

    // <ListCard/>
    // <ListHeader/>
    // <ColumnBox/>
    // <Dashboard/>
    // <TopBar />
  );
}

export default App;
