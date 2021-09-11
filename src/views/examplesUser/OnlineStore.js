import React  from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const OnlineStore = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Online Store  User</h3>
              </CardHeader>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default OnlineStore;
