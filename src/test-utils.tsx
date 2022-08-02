import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RootState, store as storeTest } from "./store/store";

const customRender = (
  ui: React.ReactElement,
  {
    preloadedState,
    ...renderOptions
  }: {
    preloadedState?: RootState;
    store?: ReturnType<typeof configureStore>;
  } = {}
) => {
  const Wrapper: React.FC<{
    children: React.ReactNode;
  }> = ({ children }) => <Provider store={storeTest}>{children}</Provider>;

  return render(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });
};

export * from "@testing-library/react";

export { customRender as render };
