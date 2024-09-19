import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


export const Alert = (message,icon,color) => {
  // let colors=['green','#EF4444'];
  const mySwal = withReactContent(Swal);
  
  

  mySwal.fire({
    title: message,
    icon: icon,
    confirmButtonColor: "#EF4444",
    showCloseButton:true,
    
  });
};
