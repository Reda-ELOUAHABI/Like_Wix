
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Analytics = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card Analytics</h3>
              </CardHeader>
       
           </Card>
          </div>
        </Row>
  </Container>
    </>
  );
};

export default Analytics;
