/** @jest-environment jsdom */
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../test-utils";
import { Tasks } from ".";
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

describe("Tasks page", () => {
  beforeEach(() => {
    localStorage.setItem("token", "sdasda684a65aqw4rw");
    localStorage.setItem("userName", "user");
  });
  describe("When rendering the tasks page", () => {
    it("should render filter tasks component", async () => {
      render(
        <MemoryRouter initialEntries={[{ pathname: "/" }]}>
          <Tasks />
        </MemoryRouter>
      );
      expect(
        screen.getByPlaceholderText("Buscar por título...")
      ).toBeInTheDocument();
      expect(screen.getByRole("radio", { name: "" })).toBeInTheDocument();
      expect(
        screen.getByRole("radio", { name: "Mis Tareas" })
      ).toBeInTheDocument();
      expect(screen.getByTestId("select-byImportance")).toBeInTheDocument();
      expect(screen.getByTestId("option-byImportance-LOW")).toBeInTheDocument();
      expect(
        screen.getByTestId("option-byImportance-MEDIUM")
      ).toBeInTheDocument();
      expect(
        screen.getByTestId("option-byImportance-HIGH")
      ).toBeInTheDocument();
    });

    it("should render form tasks component", async () => {
      render(
        <MemoryRouter initialEntries={[{ pathname: "/" }]}>
          <Tasks />
        </MemoryRouter>
      );
      expect(screen.getByPlaceholderText("Título")).toBeInTheDocument();
      expect(screen.getByTestId("select-status")).toBeInTheDocument();
      expect(screen.getByTestId("option-status-NEW")).toBeInTheDocument();
      expect(
        screen.getByTestId("option-status-IN PROGRESS")
      ).toBeInTheDocument();
      expect(screen.getByTestId("option-status-FINISHED")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Crear" })).toBeInTheDocument();
    });

    it("should render tasks section", async () => {
      render(
        <MemoryRouter initialEntries={[{ pathname: "/" }]}>
          <Tasks />
        </MemoryRouter>
      );
      expect(await screen.findByText("TASK1")).toBeVisible();
      expect(await screen.findByText("TASK2")).toBeVisible();
    });
  });

  describe("When the user add a new task", () => {
    it("should complete the form an visualize the data", async () => {
      render(
        <MemoryRouter initialEntries={[{ pathname: "/" }]}>
          <Tasks />
        </MemoryRouter>
      );
      const inputTitle = screen.getByPlaceholderText("Título");
      const selectStatus = screen.getByTestId("select-status");
      const selectOptionStatus = screen.getByTestId("option-status-NEW");
      const selectPriority = screen.getByTestId("select-importance");
      const selectOptionPriority = screen.getByTestId("option-importance-LOW");
      const textareaDescription = screen.getByTestId("textarea-description");
      const buttoncreate = screen.getByRole("button", { name: "Crear" });
      //
      userEvent.clear(inputTitle);
      userEvent.clear(textareaDescription);

      fireEvent.change(inputTitle, { target: { value: "TASK123456" } });
      fireEvent.change(textareaDescription, {
        target: { value: "Descripcion de tarea 3..." },
      });

      userEvent.click(selectStatus);

      userEvent.selectOptions(selectStatus, selectOptionStatus);
      userEvent.selectOptions(selectPriority, selectOptionPriority);

      expect(inputTitle).toHaveDisplayValue("TASK123456");
      expect(textareaDescription).toHaveDisplayValue(
        "Descripcion de tarea 3..."
      );

      userEvent.click(buttoncreate);

      expect(await screen.findByRole("alert")).toBeVisible();

      expect((await screen.findByTestId("tasks-counter")).textContent).toBe(
        "Tareas:3"
      );
    });
  });

  describe("When the user add a new task but dont complete any input", () => {
    it("should render the message '* Campo obligatorio' in the 4 empty fields", async () => {
      render(
        <MemoryRouter initialEntries={[{ pathname: "/" }]}>
          <Tasks />
        </MemoryRouter>
      );
      const buttoncreate = screen.getByRole("button", { name: "Crear" });

      userEvent.click(buttoncreate);
      expect((await screen.findAllByText("* Campo obligatorio")).length).toBe(
        4
      );
    });

    describe("When the user filter the tasks", () => {
      it("should filter by name", async () => {
        render(
          <MemoryRouter initialEntries={[{ pathname: "/" }]}>
            <Tasks />
          </MemoryRouter>
        );
        const inputByTitle = screen.getByTestId("input-byTitle");
        userEvent.clear(inputByTitle);

        await userEvent.type(inputByTitle, "TASK1");
        expect(inputByTitle).toHaveValue("TASK1");

        setTimeout(() => {
          expect(screen.queryByText("TASK1")).toBeVisible();
          expect(screen.queryByText("TASK2")).not.toBeVisible();
        }, 1000);
      });
      it("should filter by importance", async () => {
        render(
          <MemoryRouter initialEntries={[{ pathname: "/" }]}>
            <Tasks />
          </MemoryRouter>
        );
        const selectPriority = screen.getByTestId("select-importance");
        const selectOptionPriority = screen.getByTestId(
          "option-importance-LOW"
        );

        userEvent.selectOptions(selectPriority, selectOptionPriority);
        expect(screen.queryByText("TASK1")).not.toBeInTheDocument();
        expect(await screen.findByText("TASK2")).toBeInTheDocument();
      });
    });
  });
});
