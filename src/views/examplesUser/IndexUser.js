import React  from "react";
// react component that copies the given text inside your clipboard
// import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import { } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

// reactstrap components
import {
    Card,
    CardHeader,
    Container,
    Row,
} from "reactstrap";

// import { CardBody, CardTitle, Col } from "reactstrap";
import Logo from "../../assets/My-Images/logo_real.png";
import Image1 from "../../assets/My-Images/image1.png";
import Image2 from "../../assets/My-Images/image2.png";
import Image3 from "../../assets/My-Images/image3.png";
import Image4 from "../../assets/My-Images/image4.png";
// core components
//import Header from "components/Headers/Header.js";
import "./style_orders.scss";
// import Caard from "components/Components/Card";

// import MyCarousel from "components/Components/MyCarousel";
// import CardSpecial from "./CardSpecial";
// import ArgonHeaderCards from "./ArgonHeaderCards";
import BlueCards from "components/Components/BlueCards";
import "./indexUser_style.scss";
function IndexUser() {
    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                {/* Table */}
                <Row>
                    <div className="col">
                        <Card className="shadow shadow1">
                            <CardHeader className="bg-transparent">
                                <h3 className="mb-0 welcomeTostorak">
                                    {" "}
                                    <img className="Logo" src={Logo} alt="logo" /> Welcome to
                                    storaak
                                </h3>
                                <p className="pleaseConfirm">
                                    please confirm your email , &nbsp;{" "}
                                    <span className="clickHere">click here</span>
                                </p>
                            </CardHeader>
                        </Card>
                    </div>
                </Row>

                <button className="thisMonth">
                    <p>
                        This month <i className="fas fa-chevron-down"></i>
                    </p>
                </button>

                <Container>
                    {/* I want this part Responsive 
           / <Row lg="12" xs="1" sm="2" md="6">*/}
                    <Row>
                        <ul className="caard-list  ">
                            <BlueCards />
                            <BlueCards />
                            <BlueCards />
                            <BlueCards />
                        </ul>
                    </Row>
                </Container>

                <Row>
                    <div className="col">
                        <Card className="shadow shadow2">
                            <CardHeader className="bg-transparent">
                                <div>
                                    <h1>
                                        <i className="fas fa-shopping-cart"></i>
                                        New Orders
                                    </h1>
                                    <br />
                                    <p className="tableOrder">
                                        Order No. &nbsp; &nbsp; &nbsp; &nbsp; Client &nbsp; &nbsp;
                                        &nbsp; &nbsp; Order History &nbsp; &nbsp; &nbsp; &nbsp; Edit
                                        History &nbsp; &nbsp; &nbsp; &nbsp; Shippment &nbsp; &nbsp;
                                        &nbsp; &nbsp; Payment &nbsp;&nbsp;&nbsp; &nbsp; Status
                                        &nbsp;&nbsp;&nbsp; &nbsp; Notes &nbsp;&nbsp;&nbsp; &nbsp;
                                        Total
                                    </p>
                                    <h3 className="noteOrder">There's no orders right now</h3>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                </Row>
                <br />
                <br />

                <ul className="caard-list  ">
                    <Row>
                        <div className="col">
                            <Card className="shadow shadow3 shadow31">
                                <CardHeader className="bg-transparent">
                                    <div>
                                        <h1 className="Title2Card">
                                            <i className="fas fa-shopping-cart text-primary"></i>
                                            &nbsp;&nbsp; Top Selling
                                        </h1>
                                    </div>
                                    <button className="AddItems">
                                        <p>
                                            Add Items <i className="fas fa-plus "></i>
                                        </p>
                                    </button>
                                </CardHeader>
                            </Card>
                        </div>
                    </Row>

                    <Row
                        style={
                            {
                                //   marginLeft: "100px"
                            }
                        }
                    >
                        <div className="col">
                            <Card className="shadow shadow3 shadow32">
                                <CardHeader className="bg-transparent">
                                    <div>
                                        <h1 className="Title2Card">
                                            <i className="fas fa-shopping-cart text-danger"></i>
                                            &nbsp; Products almost sold out
                                        </h1>
                                    </div>

                                    <button className="AddItems">
                                        <p>
                                            AddItems <i className="fas fa-plus"></i>
                                        </p>
                                    </button>
                                </CardHeader>
                            </Card>
                        </div>
                    </Row>
                </ul>

                <br />
                <br />

                <Row>
                    <div className="col">
                        <Card className="shadow shadow2">
                            <CardHeader className="bg-transparent">
                                <div>
                                    <h3 className="noteOrder">
                                        <i className="fas fa-chevron-down downn"></i>
                                        There's no orders right now
                                    </h3>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                </Row>
                {/* <ArgonHeaderCards /> */}

                {/* Table */}
                {/* First try Flex */}
                <br />
                <br />

                <div className="containerFlex1">
                    <div className="flexCard11">
                        <Row>
                            <div className="col">
                                <Card className="shadow">
                                    <CardHeader className="bg-transparent">
                                        <div className="HorizentalOne">
                                            <h1 >Set up the Store</h1>
                                            <button className="btnflexCards bg-danger"> click me</button>
                                            <img src={Image1} alt="image1" />
                                        </div>
                                        <div className="VerticalOne">
                                            <p>Set up the Store</p>
                                            <button className="btnflexCards bg-primary"> click me</button>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </div>
                        </Row>
                    </div>
                    <div className="flexCard12">
                        <Row>
                            <div className="col">
                                <Card className="shadow">
                                    <CardHeader className="bg-transparent">
                                        <div className="HorizentalOne">
                                            <h1>Set up the Store</h1>
                                            <button className="btnflexCards bg-success"> click me</button>
                                            <img src={Image2} alt="image2" />
                                        </div>
                                        <div className="VerticalOne">
                                            <p>Set up the Store</p>
                                            <button className="btnflexCards bg-primary"> click me</button>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </div>
                        </Row>
                    </div>
                </div>

                <br />
                <br />
                <br />

                <div className="containerFlex2">
                    <div className="flexCard21">
                        <Row>
                            <div className="col">
                                <Card className="shadow">
                                    <CardHeader className="bg-transparent">
                                        <div className="HorizentalOne">
                                            <h1>Set up the Store</h1>
                                            <button className="btnflexCards bg-danger"> click me</button>
                                            <img src={Image3} alt="image3" />
                                        </div>
                                        <div className="VerticalOne">
                                            <p>Set up the Store</p>
                                            <button className="btnflexCards bg-primary"> click me</button>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </div>
                        </Row>
                    </div>
                    <div className="flexCard22">
                        <Row>
                            <div className="col">
                                <Card className="shadow">
                                    <CardHeader className="bg-transparent">
                                        <div className="HorizentalOne">
                                            <h1>Set up the Store</h1>
                                            <button className="btnflexCards bg-danger"> click me</button>
                                            <img src={Image4} alt="image5" />
                                        </div>
                                        <div className="VerticalOne">
                                            <p>Set up the Store</p>
                                            <button className="btnflexCards bg-primary"> click me</button>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </div>
                        </Row>
                    </div>
                </div>

                <br />
                <br />
                <br />
            </Container>
        </>
    );
}

export default IndexUser;
