import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row } from "reactstrap";

// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// core components
// import AuthNavbar from "components/Navbars/AuthNavbar.js";
// import AuthFooter from "components/Footers/AuthFooter.js";
import "./StyleAuth.scss"

import routes from "routes.js";

const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  // React.useEffect(() => {
  //   document.body.classList.add("bg-default");
  //   return () => {
  //     document.body.classList.remove("bg-default");
  //   };
  // }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div 
      // className="main-content" 
      ref={mainContent}
      
      >
  
        {/* Page content */}
        <Container className="mt--8 pb-5 NOPADDING" 
        style={{
          maxWidth: "100%",
         // marginBottom: "-110px",
          // paddingBottom: '0px !important'
          // minHeight: "100% !important",
        }}
        >
          <Row 
          // className="justify-content-center"
          >
            <Switch>
              {getRoutes(routes)}
              <Redirect from="*" to="/auth/login" />
            </Switch>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Auth;
