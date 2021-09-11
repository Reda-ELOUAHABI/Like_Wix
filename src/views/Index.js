import React, { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar,Doughnut } from "react-chartjs-2";
import "./style.css";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
  chartExample3,

} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  //const objt = {backgroundColor:"white"};
  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row  style={{backgroundColor:"white "}}>
          <Col className="mb-5 mb-xl-0 test" xl="8"  style={{backgroundColor:"white "}}>
            {/* <Card className="bg-gradient-default shadow"  style={{backgroundColor:"white"}}> */}
            <Card className=" shadow"  style={{backgroundColor:"white"}}>
              <CardHeader className="bg-transparent"  style={{backgroundColor:"white"}}>
                <Row className="align-items-center" style={{backgroundColor:"white "}}>
                  <div className="col" style={{backgroundColor:"white "}}>
                    <h2 className="text-white mb-0">Cumulative Total</h2>
                  </div>
                  <div className="col" style={{backgroundColor:"white "}}>
                    <Nav className="justify-content-end" pills style={{backgroundColor:"white "}}>
                      <NavItem style={{backgroundColor:"white "}}>
                        <NavLink  style={{backgroundColor:"white "}}
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span id="coko" className="d-none d-md-block">
                            This Month
                          </span>
                        </NavLink>
                      </NavItem>
                      <NavItem style={{backgroundColor:"white "}}>
                        <NavLink
                        style={{backgroundColor:"white "}}
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                          >
                          <span className="d-none d-md-block">Last Week</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>

              <CardBody style={{backgroundColor:"white "}}>
                {/* Chart */}
                <div className="chart"  style={{backgroundColor:"white"}}>
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    style={{backgroundColor:"white"}}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    {/* <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6> */}
                    <h2 className="mb-0">Total orders</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <br />
        <br />
        <br />
        <Row>
        
          <Col className="mb-5 mb-xl-0" xl="4">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    {/* <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6> */}
                    <h2 className="text-white mb-0">Graph 2</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Last Week</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>

              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    {/* <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6> */}
                    <h2 className="mb-0">Total orders</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col className="mb-5 mb-xl-0" xl="4">
            <Card className=" shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="text-white mb-0">Publish</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span id="coko" className="d-none d-md-block">
                            This Month
                          </span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Doughnut
                    data={chartExample3.data}
                    options={chartExample3.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
