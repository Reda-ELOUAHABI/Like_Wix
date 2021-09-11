import React from "react";
import { Link } from "react-router-dom";
import "./userNavbarStyle.css";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

const UserNavbar = (props) => {
  return (
    <>
      <Navbar
        className="navbar-top navbar-light"
        expand="md"
        id="navbar-main"
        style={{ backgroundColor: "white" }}
      >
        <Container fluid>
          {/* //there is another searchform in the side bar : search inputID */}

          <Form
            style={{
              position: "relative",
              right: "480px",
            }}
            className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"
          >
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <i
                    style={{
                      position: "relative",
                      bottom: "-13px",
                      left: "10px",
                    }}
                    className="fas fa-search"
                  />
                  <InputGroupText></InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Search"
                  type="text"
                  style={{
                    color: "black",
                    //position: "left"
                  }}
                />
              </InputGroup>
            </FormGroup>
          </Form>

          <a href="#/" className="test">
            <i className="fas fa-layer-group"></i>
            <span className="num1">2</span>
          </a>

          {/* <button className="btn "> */}
          {/* <i className="fas fa-check-circle"></i> */}
          <a href="#/" className="test">
            <span className="fa fa-check-circle"></span>
            <span className="num2">2</span>
          </a>
          {/* <a className="fa fa-globe">
              
              
            </a> */}
          {/* </button> */}

          <a href="#/" className="test">
            <i className="fas fa-shopping-cart fa-shopping-cart1"></i>
            <span className="num3">2</span>
          </a>

          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      //user profile img hosted
                      src="https://i.ibb.co/zNBr3SD/Screenshot-2021-07-14-234407.png"
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      Mohammed Ali
                    </span>
                  </Media>
                  <i className="fas fa-sort-down" style={{}}></i>
                </Media>
              </DropdownToggle>

              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default UserNavbar;
