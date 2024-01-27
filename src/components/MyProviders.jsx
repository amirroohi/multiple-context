import { ThemeProvider } from "../context/ThemeContext";
import { UserProvider } from "../context/UserContext";

export default function MyProviders({ children }) {
  return (
    <UserProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </UserProvider>
  );
}
