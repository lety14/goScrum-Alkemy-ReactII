import Swal from "sweetalert2";

export const badCredentials: () => void = () => {
  Swal.fire({
    title: "Credenciales inválidas",
    text: "Por favor introduzca credenciales válidas",
    confirmButtonText: "Aceptar",
    width: "400px",
    timer: 10000,
    timerProgressBar: true,
  });
};
