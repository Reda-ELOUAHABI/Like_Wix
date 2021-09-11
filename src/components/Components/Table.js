import React from "react";

// reactstrap components
// import { Card, Container, Row } from "reactstrap";

import {Table
} from "reactstrap";
import RowTable from "./RowTable";

//https://codepen.io/chryss/pen/rbZxwa : just search filter on opencode

//todo: change also those titles format
function TableProducts() {
  return (
    <div className="container">
      <Table className="table align-items-center table-flush" responsive>
        <thead>
          <tr>
            <th>
            <label className="container1">
                <input type="checkbox" />
                <span className="checkmark"></span>{" "}
              </label>
            </th>
            <th scope="col">
              <h4>
                Products <i className="fas fa-sort-down"></i>
              </h4>
            </th>
            <th scope="col">
              <h4>Inverntory</h4>
            </th>
            <th scope="col">
              <h4>Type</h4>
            </th>
            <th scope="col">
              <h4>Vendor</h4>
            </th>
          </tr>
        </thead>
        <tbody>
        <RowTable />
        <RowTable />
        <RowTable />
        <RowTable />
</tbody>
      </Table>
    </div>
  );
}

export default TableProducts;
