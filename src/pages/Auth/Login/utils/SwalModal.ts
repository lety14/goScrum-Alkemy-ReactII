import Swal from "sweetalert2";

export const SwalModal = () =>
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Te registraste exitosamente!",
    text: "Logueate para ingresar",
    showConfirmButton: true,
    confirmButtonColor: "green",
  });
