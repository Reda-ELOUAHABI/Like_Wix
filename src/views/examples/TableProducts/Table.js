import React from "react";

// reactstrap components
// import { Card, Container, Row } from "reactstrap";

import {  Table,
 
} from "reactstrap";
import RowTable from "./RowTable";

//https://codepen.io/chryss/pen/rbZxwa : just search filter on opencode

//todo: change also those titles format
function TableProductsUser() {
  return (
    <div className="container">
      <Table className="table align-items-center table-flush" style={{
        backgroundColor: "white",
      }} responsive>
        <thead style={{
          backgroundColor: "#f8f9fe",
        }}>
          <tr>
            <th>
            <label className="container1">
                <input type="checkbox" />
                <span className="checkmark"></span>{" "}
              </label>
            </th>
            <th scope="col">
              <h4>
                Product 
                {/* <i className="fas fa-sort-down"></i> */}
              </h4>
            </th>
            <th scope="col">
              <h4>ID</h4>
            </th>
            <th scope="col">
              <h4>Quantity</h4>
            </th>
            <th scope="col">
              <h4>Date</h4>
            </th>
            <th scope="col">
              <h4>Status</h4>
            </th>
            <th scope="col">
              <h4>Action</h4>
            </th>
          </tr>
        </thead>
        <tbody>
        <RowTable status="Available"  />
        <RowTable status="Out of stock"  />
        <RowTable status="Available"  />
        <RowTable  status="Almost finished"  />
        <RowTable  status="Available" />
        <RowTable status="Almost finished" />

</tbody>
      </Table>
    </div>
  );
}

export default TableProductsUser;
