import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Alert = (message,icon) => {
  let colors={};
  const mySwal = withReactContent(Swal);

  mySwal.fire({
    title: message,
    icon: icon,
    confirmButtonColor: "#EF4444",
    showCloseButton:true,
    
  });
};
