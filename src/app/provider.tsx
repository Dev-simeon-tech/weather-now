import { BrowserRouter } from "react-router";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
export default AppProvider;
