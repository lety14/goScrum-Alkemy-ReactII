import { useFormik } from "formik";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { initialValues } from "./constants";
import {
  ButtonContainer,
  Container,
  Form,
  RedirectTo,
  ThemeToggleBox,
  Title,
} from "../Auth.style";
import { useLoginUserMutation } from "../../../store/services/user.endpoints";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { badCredentials } from "../../../components/ModalAlert/BadCredentials";
import ThemeToggle from "../../../components/ThemeToggle";
import { useEffect } from "react";
import { SwalModal } from "./utils/SwalModal";

import { validationSchema } from "./utils/ValidationSchema";
import withTransition from "../../../HOC/withTransition";

interface LocationState {
  fromRegistration: boolean;
}

function Login() {
  const [postLoginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  useEffect(() => {
    state?.fromRegistration && SwalModal();
  }, [state]);

  const onSubmit = async () => {
    try {
      const payload = await postLoginUser(values).unwrap();
      localStorage.setItem("token", payload?.result?.token);
      localStorage.setItem("userName", payload?.result?.user.userName);

      navigate("/", { replace: true });
    } catch (error) {
      badCredentials();
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, errors, touched, handleBlur, values } =
    formik;

  return (
    <Container>
      <ThemeToggleBox>
        <ThemeToggle />
      </ThemeToggleBox>
      <Form onSubmit={handleSubmit}>
        <Title>Iniciar sesión</Title>
        <Input
          label="Usuario"
          name="userName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.userName}
          error={errors.userName}
          touched={touched.userName}
        />
        <Input
          label="Contraseña"
          name="password"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={errors.password}
          touched={touched.password}
        />
        <ButtonContainer>
          <Button type="submit" buttonName="Enviar" />
        </ButtonContainer>
        <RedirectTo>
          ¿No tienes cuenta?
          <Link className="redirect" to="/register">
            Regístrate
          </Link>
        </RedirectTo>
      </Form>
    </Container>
  );
}

export default withTransition(Login);
