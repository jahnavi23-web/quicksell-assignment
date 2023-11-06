import ListHeader from "./components/ListHeader";
import ListCard from "./components/ListCard";
import Main from "./components/Main";
import ColumnBox from "./components/ColumnBox";
import Dashboard from "./components/Dashboard";
import TopBar from "./components/TopBar";

import { CookiesProvider } from "react-cookie";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Quicksell Assignment";
  });

  return (
    <CookiesProvider>
      <Main />
    </CookiesProvider>
  );
}

export default App;
