
// reactstrap components
import {
  FormGroup,
  Form,
  Input,

  Row,
  Col,

} from "reactstrap";
// const img = "https://picsum.photos/200";
const Register = () => {


  return (
    <>
      <div>
        <Row>
          <Col lg="8" style={{
            background: "linear-gradient(#056FDE, #032A8C)",
            // backgroundColor: "blue",
            height: "118vh"
          }}>

            <div style={{
              padding: "300px",
              height: "100vh",

            }}>
              <h1 style={{
                color: "white",
                fontWeight: "bold"

              }}>Storaak</h1>
              <p style={{
                color: "white",
                fontWeight: "bolder",
                whiteSpace: "nowrap",


              }}>The most popular ecommerce builder</p>
              <button style={{
                backgroundColor: "#4287f5",
                height: "40px",
                width: "100px",
                borderRadius: "20px",
                color: "white",
              }}>Read More</button>


              <div style={{
                position: "relative",
                top: "10px",
                left: "-380px",
                width: '300px',
                height: '100px',
                border: 'solid 1px #fff',
                borderColor: '#fff transparent transparent transparent',
                borderRadius: '1700px 1800px 0 0'
              }}></div>
              <div style={{
                position: "relative",
                top: "-20px",
                left: "-300px",
                width: '300px',
                height: '120px',
                border: 'solid 1px #fff',
                borderColor: '#fff transparent transparent transparent',
                borderRadius: '600px 600px 0 0'
              }}></div>
            </div>

          </Col>
          <Col lg="4" style={{
            // backgroundColor: "red",
            height: "600px",
            marginTop: "200px",
            // paddingRight: "180px",
            paddingLeft: "90px"
          }}>

          <div style={{
            margingLeft: "100px"
          }}>
          <br></br>
          <h1 style={{
                fontWeight: "bold"
              }}>Hello !</h1>
          <p style={{
                fontWeight: "bolder",
                marginBottom: "20px"
              }}>Sign Up to get Started</p>
            <Form>
            <FormGroup>
                {/* <Label for="exampleEmail">Email</Label> */}
                <i className="far fa-user" 
                // onClick={changeOpacity()} 
                style={{
                position: "relative",
                top: "30px",
                left: "10px",
                fontSize: "15px",
                color: "grey",
                // padding: "10px"
              
                }}></i>
                <Input 
                style={{
                  borderRadius: "20px",
                  paddingLeft: "40px"
                }}
                type="text" name="username" id="fullName" placeholder="Full Name" />
                
              </FormGroup>
              
              <FormGroup>
                {/* <Label for="exampleEmail">Email</Label> */}
                <i className="far fa-envelope" 
                // onClick={changeOpacity()} 
                style={{
                position: "relative",
                top: "30px",
                left: "10px",
                fontSize: "15px",
                color: "grey",
                // padding: "10px"
              
                }}></i>
                <Input 
                style={{
                  borderRadius: "20px",
                  paddingLeft: "40px"
                }}
                type="email" name="email" id="exampleEmail" placeholder="Email" />
                
              </FormGroup>
              
              <FormGroup>
                {/* <Label for="examplePassword">Password</Label> */}
                <i className="fas fa-lock" 
                style={{
                position: "relative",
                top: "30px",
                left: "10px",
                fontSize: "15px",
                color: "grey"
                }}></i>
                <Input 
                style={{
                  borderRadius: "20px",
                  paddingLeft: "40px"
                }}
                type="password" name="password" id="examplePassword" placeholder="Password" />
                
              </FormGroup>
              <button style={{
                backgroundColor: "#4287f5",
                height: "40px",
                width: "100px",
                borderRadius: "20px",
                color: "white",
                marginBottom: "20px"
              }}>Register</button>
            </Form>

          </div>
          
          </Col>
        </Row>



      </div>

    </>
  );
};

export default Register;
