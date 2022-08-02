import { IRegistrationUser } from "../../../types/userRegister.type";

export const initialValues: IRegistrationUser = {
  userName: "",
  password: "",
  email: "",
  teamID: "",
  role: "",
  continent: "",
  region: "Otro",
};

export const errorMessage: Record<string, string> = {
  userName: "* Ingrese entre 4 y 20 caracteres",
  email: "* Ingrese un email válido",
  password: "* Ingrese mínimo 6 caracteres",
  required: "* Campo obligatorio",
};
