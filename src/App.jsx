import "./App.css";
import WelcomePanel from "./components/WelcomePanel";
import MyProviders from "./components/MyProviders";
import ToggleTheme from "./components/ToggleTheme";
// import { createContext } from "react";
// export const ThemeContext = createContext(null);
// export const CurrentUserContext = createContext(null);

export default function MyApp() {
  return (
    <MyProviders>
      <WelcomePanel />
      <ToggleTheme />
    </MyProviders>
  );
}
