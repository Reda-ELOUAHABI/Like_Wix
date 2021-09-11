import React from "react";

// reactstrap components
// import { Card, Container, Row } from "reactstrap";

import {Media
} from "reactstrap";
function RowTable() {
  return (
    <tr>
      <th>
        <label className="container1">
          <input type="checkbox" />
          <span className="checkmark"></span>{" "}
        </label>
      </th>
      <th scope="row">
        <Media className="align-items-center">
          <a
            className="avatar  mr-3"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            style={{
              borderRadius: "7px ",
              border: "1px ridge rgba(149, 143, 151, 0.6)",
              backgroundColor: "transparent",
            }}
          >
            <img
              alt="..."
              src={require("../../assets/My-Images/imac.jpg").default}
            />
          </a>
          <Media>
            <span
              className="mb-0 text-sm"
              style={{ color: "blue", paddingRight: "5px" }}
            >
              IMac Pro 500GB
            </span>
          </Media>
        </Media>
      </th>
      <td>
        <span style={{ color: "blue", paddingRight: "5px" }}> 2 </span> in stock
        for variant
      </td>
      <td> Desktop </td>
      <td> Apple </td>
    </tr>
  );
}

export default RowTable;
