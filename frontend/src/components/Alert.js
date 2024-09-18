import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";

export const Alert = (message,icon) => {
  // let colors=['green','#EF4444'];
  const mySwal = withReactContent(Swal);
  
  

  mySwal.fire({
    title: message,
    icon: icon,
    confirmButtonColor: "#EF4444",
    showCloseButton:true,
    
  });
};
