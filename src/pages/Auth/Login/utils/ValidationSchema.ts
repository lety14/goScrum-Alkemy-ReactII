import * as Yup from "yup";
import { errorMessage } from "../constants";

export const validationSchema = () =>
  Yup.object().shape({
    userName: Yup.string()
      .min(4, errorMessage.userName)
      .max(20, errorMessage.userName)
      .required(errorMessage.required),
    password: Yup.string()
      .min(6, errorMessage.password)
      .required(errorMessage.required),
  });
