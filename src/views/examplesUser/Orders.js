import React from "react";
// react component that copies the given text inside your clipboard
// import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {

} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";


// reactstrap components
import {
  Container,
} from "reactstrap";
// core components
//import Header from "components/Headers/Header.js";
import "./style_orders.scss";
import Caard from "components/Components/Card";

import MyCarousel from "components/Components/MyCarousel";
import CardSpecial from "./CardSpecial";


const Orders = () => {
  // const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <MyCarousel />
        {/* Table */}
        {/* <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Orders  User</h3>
              </CardHeader>
            </Card>
          </div>
        </Row> */}
        <CardSpecial />
        <h1 className="YourProducts">
          Your Products
        </h1>

        {/* Table */}
        <ul className="caard-list ">
          <Caard />
          <Caard />
          <Caard />
          <Caard />
          <br />
        </ul>
        <ul className="caard-list">
          <Caard />
          <Caard />
          <Caard />
          <Caard />
          <br />
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </>
  );
};

export default Orders;
