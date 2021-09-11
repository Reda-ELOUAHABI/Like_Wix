import React from "react";
import profile from "../../assets/My-Images/profile.png";
// reactstrap components
import {
  Container,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import "./style.scss";
//import Image "../..";
const Analytics = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        {/* <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card Analytics User</h3>
              </CardHeader>
            </Card>
          </div>
        </Row> */}
<br />
<div style={{
  margin: "100px"
}}></div>
        
        <ul className="caard-list">
          <li className="caard caard1">
            <a
              className="caard-image"
              href="/#"
              target="_blank"
              style={{
                backgroundImage:
                  "url(" +
                  // "https://image.freepik.com/free-vector/gradient-network-connection-background_23-2148865392.jpg" +

                  "https://image.freepik.com/free-vector/dots-connection-lines-digital-background_23-2148821703.jpg" +
                  ")",
                height: "444px ",
              }}
            >
              <img src="/#" alt="Psychopomp" />

              <h2>SET UP YOUR DOMAIN</h2>
              <p>
                Get lorem10 Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Morbi ultricies eu nulla vel dapibus.{" "}
              </p>
              <h3>SET UP YOUR DOMAIN</h3>
            </a>
          </li>

          <li className="caard caard2">
            <a  className="caard-image"
              href="#/"
              target="_blank"
              style={{
                backgroundImage:
                  "url(" +
                  "https://image.freepik.com/free-vector/global-network-futuristic-technology_53876-97389.jpg" +
                  ")",
                // height: "70px",
                top: "0",
                backgroundSize: "800px",
                backgroundRepeat: "no-repeat",
                height: "10px"
              }}
            >
            {/* to fix the enchore problem */}
            .
            
            </a>
            <a
              className="caard-description"
              href="/#"
              target="_blank"
              style={{
                height: "187px",
              }}
            >
              <h2>Customise your own design</h2>
              <p style={{ color: "black" }}>
                Choose your own lqn akjna akna kann s aokqk aqkqk kqkna nso
              </p>
              <h3>Store Design</h3>
            </a>
          </li>

          <li
            className="caard caard3"
            style={{
              backgroundColor: "white",
            }}
          >
            <a
              className="caard-image3 image_profile"
              href="/#"
              target="_blank"
              style={{
                // backgroundImage:
                //   "url(" +
                //   "https://image.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg" +
                //   ")",
                // height: "70px",
                top: "0",
                // backgroundColor: "white",
                backgroundSize: "200px",
                borderRadius: "25px",
                backgroundRepeat: "no-repeat",
                height: "10px",
              }}
            >
              <div className="wrapper">
                <img src={profile} alt="profile" />
              </div>
              <div>
                <p
                  style={{
                    color: "black",
                    position: "relative",
                    left: "15px",
                    top: "-90px",
                    fontWeight: "900",
                  }}
                >
                  My Own Profile
                </p>
              </div>
            </a>

            <a
              className="caard-description"
              href="/#"
              target="_blank"
              style={{
                height: "187px",
                position: "relative",
                top: "80px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  borderRadius: "60%",
                }}
              >
                <button className="CancelBtn">Cancel</button>
                <button className="PlansBtn">Plans</button>
              </div>
            </a>
          
          
          </li>
        </ul>
      
      
      </Container>
    </>
  );
};

export default Analytics;
