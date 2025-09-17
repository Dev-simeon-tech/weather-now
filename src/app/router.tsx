import { Routes, Route } from "react-router";
import Home from "./routes/home";
import NotFoundRoute from "./routes/notFoundRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFoundRoute />} />
    </Routes>
  );
};

export default AppRouter;
