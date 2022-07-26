import { ILoginUser } from "../../../types/userLogin.type";

export const initialValues: ILoginUser = {
  userName: "",
  password: "",
};

export const errorMessage: Record<string, string> = {
  userName: "* Ingrese entre 4 y 20 caracteres",
  password: "* Ingrese mínimo 6 caracteres",
  required: "* Campo obligatorio",
};
