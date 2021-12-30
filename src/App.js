import { useState } from "react";
import Modes from "./Colors";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "white",
  titleColor: "#26ff2d",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "black",
  titleColor: "#b87e0b",
  tagLineColor: "white"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}


function App() {
  const [theme, setTheme] = useState("light");
  return (
	<ThemeProvider theme={themes[theme]}>
		<Modes theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;