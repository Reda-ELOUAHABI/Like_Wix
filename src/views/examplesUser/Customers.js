import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
//import UserHeader from "components/Headers/UserHeader.js";
import Header from "components/Headers/Header.js";
const Customers = () => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <h1>
                  Customers page User
                </h1>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></CardHeader>
              <CardBody className="pt-0 pt-md-4"></CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Customers;
