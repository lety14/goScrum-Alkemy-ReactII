/** @jest-environment jsdom */
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { render } from "../../../test-utils";
import { Login } from ".";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();
const mockedUsedLocation = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useLocation: () => mockedUsedLocation,
}));

describe("Login Page", () => {
  describe("When rendering the Login Page", () => {
    it("should render the login form", async () => {
      render(
        <MemoryRouter initialEntries={[{ pathname: "/" }]}>
          <Login />
        </MemoryRouter>
      );
      expect(screen.getByText("Iniciar sesión")).toBeInTheDocument();
      expect(screen.getByText("Usuario")).toBeInTheDocument();
      expect(screen.getByText("Contraseña")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Enviar" })).toBeEnabled();
    });
  });

  describe("When the user completes de login form", () => {
    it("should login succesfully an user registered", async () => {
      render(
        <MemoryRouter initialEntries={[{ pathname: "/" }]}>
          <Login />
        </MemoryRouter>
      );
      localStorage.clear();

      const inputUser = await screen.findByTestId("input-userName");
      const inputPassword = await screen.findByTestId("input-password");
      const buttonSendRequest = screen.getByRole("button", { name: "Enviar" });

      userEvent.clear(inputUser);
      fireEvent.change(inputUser, { target: { value: "user" } });
      await waitFor(() => {
        expect(inputUser).toHaveDisplayValue("user");
      });
      userEvent.clear(inputPassword);
      fireEvent.change(inputPassword, { target: { value: "password" } });
      await waitFor(() => {
        expect(inputPassword).toHaveDisplayValue("password");
      });

      userEvent.click(buttonSendRequest);
      await waitFor(() => {
        expect(localStorage.getItem("token")).not.toBe(null);
      });
    });
  });
});
