/** @jest-environment jsdom */
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../../test-utils";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Register } from ".";

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

describe("Register Page", () => {
  describe("When rendering the register Page", () => {
    it("should render the register form", async () => {
      render(
        <MemoryRouter initialEntries={[{ pathname: "/register" }]}>
          <Register />
        </MemoryRouter>
      );
      expect(screen.getByText("Registro")).toBeInTheDocument();
      expect(screen.getByText("Usuario")).toBeInTheDocument();
      expect(screen.getByText("Contraseña")).toBeInTheDocument();
      expect(screen.getByText("Email")).toBeInTheDocument();
      expect(screen.getByRole("checkbox", { name: "" })).toBeInTheDocument();
      expect(screen.getAllByRole("combobox", { name: "" }).length).toBe(2);
      expect(screen.getByRole("button", { name: "Enviar" })).toBeEnabled();
    });
  });

  describe("When the user completes de register form", () => {
    it("should register a new user", async () => {
      render(
        <MemoryRouter initialEntries={[{ pathname: "/register" }]}>
          <Register />
        </MemoryRouter>
      );
      const inputUser = await screen.findByTestId("input-userName");
      const inputPassword = await screen.findByTestId("input-password");
      const inputEmail = await screen.findByTestId("input-email");
      const teamID = await screen.findByRole("checkbox", { name: "" });
      const selects = screen.getAllByRole("combobox", { name: "" });
      const selectByRole = await screen.findByTestId("select-role");
      const selectByContinent = await screen.findByTestId("select-continent");
      const optionMember = await screen.findByTestId("option-role-Team Member");
      const optionEurope = await screen.findByTestId("option-continent-Europa");
      const buttonRegister = screen.getByRole("button", { name: "Enviar" });
      //
      userEvent.clear(inputUser);
      userEvent.clear(inputPassword);

      fireEvent.change(inputUser, { target: { value: "user" } });
      fireEvent.change(inputPassword, { target: { value: "password" } });
      userEvent.clear(inputEmail);
      fireEvent.change(inputEmail, { target: { value: "user@mail.com" } });
      userEvent.click(teamID);
      userEvent.click(selects[0]);

      userEvent.selectOptions(selectByRole, optionMember);
      userEvent.selectOptions(selectByContinent, optionEurope);

      userEvent.click(buttonRegister);
    });
  });
});
