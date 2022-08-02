import { useFormik } from "formik";
import * as Yup from "yup";
import { ITask } from "../../../types/tasks.type";
import { Select } from "../../../components/Select";
import { errorMessage, importanceOptions, stateOptions } from "../constants";
import { Input } from "../../../components/Input";
import Textarea from "../../../components/Textarea";
import { Button } from "../../../components/Button";
import {
  Inputs,
  Form,
  FormContainer,
  ButtonContainer,
  Title,
  Subtitle,
} from "./TaskForm.style";
import { useAppDispatch } from "../../../store/hooks";
import { postNewTask } from "../../../store/slices/tasks.slice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TaskForm = () => {
  const dispatch = useAppDispatch();
  const initialValues: ITask = {
    title: "",
    status: "",
    importance: "",
    description: "",
  };

  const onSubmit = async () => {
    await dispatch(postNewTask(values)).unwrap();
    resetForm();
    toast("Tarea creada exitosamente!");
  };

  const validationSchema = () =>
    Yup.object().shape({
      title: Yup.string()
        .min(6, errorMessage.title)
        .required(errorMessage.required),
      status: Yup.string().required(errorMessage.required),
      description: Yup.string().required(errorMessage.required),
      importance: Yup.string().required(errorMessage.required),
    });

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const {
    handleSubmit,
    handleChange,
    errors,
    touched,
    handleBlur,
    values,
    resetForm,
  } = formik;

  return (
    <FormContainer>
      <Title>Crear tarea</Title>
      <Subtitle>Crea tus tareas</Subtitle>
      <Form onSubmit={handleSubmit}>
        <Inputs>
          <Input
            name="title"
            placeholder="Título"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            error={errors.title}
            touched={touched.title}
          />
          <Select
            name="status"
            firstValue="Seleccionar un estado"
            value={values.status}
            options={stateOptions}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.status}
            touched={touched.status}
          />
          <Select
            name="importance"
            firstValue="Seleccionar una prioridad"
            value={values.importance}
            options={importanceOptions}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.importance}
            touched={touched.importance}
          />
        </Inputs>
        <Textarea
          name="description"
          onChange={handleChange}
          placeholder="Descripción"
          onBlur={handleBlur}
          error={errors.description}
          touched={touched.description}
          value={values.description}
        />
        <ButtonContainer>
          <Button type="submit" buttonName="Crear" />
        </ButtonContainer>
      </Form>
      <ToastContainer />
    </FormContainer>
  );
};
