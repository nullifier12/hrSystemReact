import Swal from "sweetalert2";
import axios from "axios";

const Alert = {
  deleteError: (
    title,
    text,
    icon,
    popupClass,
    container,
    htmlContainer,
    confirmButton,
    iconClass,
    titleClass,
    cancelClass,
    route,
    data,
    callback
  ) => {
    Swal.fire({
      title: `${title}`,
      text: `${text}`,
      icon: `${icon}`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        popup: `${popupClass}`,
        container: `${container}`,
        htmlContainer: `${htmlContainer}`,
        confirmButton: `${confirmButton}`,
        icon: `${iconClass}`,
        title: `${titleClass}`,
        cancelButton: `${cancelClass}`,
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.post(route, data).then((result) => {
          Swal.fire({
            title: `${result.data}`,
            text: "Your file has been deleted.",
            icon: "success",
            customClass: {
              popup: `${popupClass}`,
              container: `${container}`,
              htmlContainer: `${htmlContainer}`,
              confirmButton: `${confirmButton}`,
              icon: `${iconClass}`,
              title: `${titleClass}`,
              cancelButton: `${cancelClass}`,
            },
          }).then((result) => {
            callback();
          });
        });
      }
    });
  },
};

export default Alert;
