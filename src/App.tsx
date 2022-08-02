import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { Tasks } from "./pages/Task";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ThemeContext } from "./context/themeProvider.context";
import { lazy, Suspense, useContext } from "react";
const Error404 = lazy(() => import("./pages/PageNotFound/Error404.page"));

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
            <Route
              path="*"
              element={
                <Suspense fallback={<>...</>}>
                  <Error404 />
                </Suspense>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </Provider>
  );
};
