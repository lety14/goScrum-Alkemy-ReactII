import { useFormik } from "formik";
import { Input } from "../../../components/Input";
import { initialValues } from "./constants";
import { Button } from "../../../components/Button";
import { Select } from "../../../components/Select";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Title,
  Form,
  Container,
  RedirectTo,
  ToggleMessage,
  ToggleContainer,
  ThemeToggleBox,
  ButtonContainer,
} from "../Auth.style";
import {
  useGetAuthDataQuery,
  useRegisterUserMutation,
} from "../../../store/services/user.endpoints";
import Toggle from "../../../components/Toggle";
import { v4 as uuidv4 } from "uuid";
import { validationSchema } from "./utils/ValidationSchema";
import ThemeToggle from "../../../components/ThemeToggle";
// const { REACT_APP_API_ENDPOINT } = process.env;

export const Register = () => {
  const [hasTeam, setHasTeam] = useState<boolean>(false);
  const [teamIDvalue, setTeamIDvalue] = useState<string>("");

  const navigate = useNavigate();
  const [postRegistrationUser] = useRegisterUserMutation();

  const handleHasTeam = (isChecked: boolean) => {
    setHasTeam(isChecked);
  };

  const { data } = useGetAuthDataQuery({});

  const onSubmit = async () => {
    const teamID = !teamIDvalue ? uuidv4() : values.teamID;
    try {
      await postRegistrationUser({ values, teamID }).unwrap();
      resetForm();
      navigate("/login", {
        state: {
          fromRegistration: true,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

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
    <Container>
      <ThemeToggleBox>
        <ThemeToggle />
      </ThemeToggleBox>
      <Form onSubmit={handleSubmit}>
        <Title>Registro</Title>
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
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={errors.password}
          touched={touched.password}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={errors.email}
          touched={touched.email}
        />
        <ToggleContainer>
          <Toggle width={35} clicked={handleHasTeam} />
          {hasTeam ? (
            <ToggleMessage>
              Se generará un nuevo identificador de equipo.
            </ToggleMessage>
          ) : (
            <ToggleMessage>Perteneces a un equipo ya creado.</ToggleMessage>
          )}
        </ToggleContainer>
        {!hasTeam && (
          <Input
            label="Introduce el identificador de equipo"
            name="teamID"
            onChange={(e) => {
              setTeamIDvalue(e.target.value);
            }}
            // onBlur={handleBlur}
            value={teamIDvalue}
          />
        )}
        <Select
          label="Rol"
          name="role"
          firstValue="Seleccionar rol..."
          value={values.role}
          options={data?.result.Rol}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.role}
          touched={touched.role}
        />
        <Select
          label="Continente"
          name="continent"
          firstValue="Seleccionar continente..."
          value={values.continent}
          options={data?.result?.continente}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.continent}
          touched={touched.continent}
        />
        {values.continent === "America" && (
          <Select
            label="Región"
            name="region"
            firstValue="Seleccionar región..."
            value={values.region}
            options={data?.result?.region}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.region}
            touched={touched.region}
          />
        )}
        <ButtonContainer>
          <Button type="submit" buttonName="Enviar" />
        </ButtonContainer>
        <RedirectTo>
          ¿Ya tienes cuenta?
          <Link className="redirect" to="/login">
            Logueate
          </Link>
        </RedirectTo>
      </Form>
    </Container>
  );
};
