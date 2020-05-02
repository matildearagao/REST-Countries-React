import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Countries from "./components/Countries";
import Country from "./components/Country";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setMode] = useState(true);

  const changeMode = () => {
    setMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <Navbar
        changeMode={changeMode}
        mode={darkMode ? "" : "light"}
        modeText={darkMode ?  "Light Mode" : "Dark Mode"}
        moonMode={darkMode ?  "fa fa-sun-o" : "fa fa-moon-o"}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Countries {...props} mode={darkMode} />}
        />
        <Route
          exact
          path={"/country/:name"}
          render={(props) => (
            <Country {...props} mode={darkMode ? "" : "light"} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
