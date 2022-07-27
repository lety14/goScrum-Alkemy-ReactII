import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Error404 from "./pages/PageNotFound/Error404.page";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import Tasks from "./pages/Task/Tasks.page";
import { GlobalStyle } from "./App.style";
import { store } from "./store/store";
import { Provider } from "react-redux";
import ThemeProvider, { ThemeContext } from "./context/themeProvider.context";
import { useContext } from "react";

export const App = () => {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  return (
    <Provider store={store}>
      <div className={theme === "light" ? "appLight" : "appDark"}>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Tasks />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Provider>
  );
};
