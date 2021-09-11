import React from "react";

// reactstrap components
// import { Card, Container, Row } from "reactstrap";

import {
  Media,
} from "reactstrap";
function RowTable(props) {
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
              src={require("../../../assets/My-Images/imac.jpg").default}
            />
          </a>
          <Media>
            <span
              className="mb-0 text-sm"
              style={{ 
                
               // color: "blue",
                
                paddingRight: "5px" }}
            >
              Lorem Lipsum
            </span>
          </Media>
        </Media>
      </th>
      <td>
      Product12
        {/* <span style={{ color: "blue", paddingRight: "5px" }}> 2 </span> in stock
        for variant */}
      </td>
      <td> 12 </td>
      <th> 17.4.2021 </th>
      <th>
        <div
          style={{
            backgroundColor: 
            props.status==="Available" ?
              "rgb(236, 236, 255)" :
                  props.status==="Almost finished" ?
                      "rgb(245, 226, 198)" : "rgb(235, 161, 150)" ,
           // height: "auto",
            width: "100px",
           // position: "relative",
            top: "0px",
            left: "0px",
            fontSize: "10px",
            borderRadius: "90px",
            textAlign: "center",
            color:
            props.status==="Available" ?
            "royalblue" :
                  props.status==="Almost finished" ?
                      "rgb(255, 184, 5)" : "rgb(245, 88, 56)" ,
            
          }}
          className="activeDiv"
        >
          {props.status}
        </div>
      </th>

      <th>
        <a
        href="#/" style={{
          textAlignP: "center" ,
          fontSize : "30px"       }}>
        <i className="fas fa-ellipsis-h" ></i>
        </a>
      </th>
    </tr>
  );
}

export default RowTable;
