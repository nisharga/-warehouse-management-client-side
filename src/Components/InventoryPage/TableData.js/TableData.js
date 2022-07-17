import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import React from "react";

const TableData = ({ val }) => {
  const { _id, name, price, supplier } = val;
  const handleDelet = (id) => {
    confirmAlert({
      title: "Confirm to DELET",
      message: "Are you sure to do Delet.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            fetch(`https://quiet-temple-29937.herokuapp.com/inventory/${_id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((val) => {
                if (val.deletedCount > 0) {
                  console.log(val, "val deleted");
                }
              });
            window.location.reload();
          },
        },
        {
          label: "No",
          onClick: () => "",
        },
      ],
    });
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{supplier}</td>
      <td>{price}</td>
      <td>
        <button onClick={() => handleDelet("nk")}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default TableData;
