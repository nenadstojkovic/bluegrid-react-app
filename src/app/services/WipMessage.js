// Vendor
import Swal from "sweetalert2";

export const WipMessage = () => {
  Swal.fire({
    position: 'top-end',
    title: 'Work in progress',
    showConfirmButton: false,
    timer: 1500
  })
}