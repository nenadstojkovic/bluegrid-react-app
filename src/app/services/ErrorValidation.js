import Swal from "sweetalert2";

export const ErrorValidation = (message, icon, position, timer) => {
    Swal.fire({
        position: position,
        icon: icon,
        title: message,
        showConfirmButton: false,
        timer: timer
      })
}