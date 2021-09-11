import React, { useState } from 'react'
import { Label , Col , Row} from 'reactstrap';
import "./LoginRegisterStyle.scss"

function LoginRegister(props) {
    const [userIsRegistered, setuserIsRegistered] = useState(false);
    // var userIsRegistered = true;
    const RegisterForm = () => {
        return (
            <div>


                <h1 className="titleH" >
                    welcome Back !
                </h1>
                <p className="titleP" >
                    Sign in in your account to continue
                </p>

                
                <div className="login-page1">
                    <div className="form1" style={{height:"480px"}}>
                    <form className="login-form1">
                    <Label for="name" className="LabelPositionning">Name</Label>
                            <br></br>
                            <input type="text" placeholder="Enter Your Name" />


                            <Label for="email" className="LabelPositionning">Email</Label>
                            <br></br>
                            <input type="text" placeholder="Enter Your Email" />
                            <Label for="password" className="LabelPositionning">Password</Label>
                            <br></br>
                            <input type="password" placeholder="Enter Your Password" />

                            <p style={{color: "royalblue",
                            fontWeight: "bold",
                            cursor: "pointer"
                            }}><a href="#/">
                                Forgot your password ?
                            </a></p>
                            {/* <div style={{whiteSpace: "nowrap",}}>
                            <input type="checkbox" />
                            <p>
                                    Check me out
                                </p>
                            </div> */}
                            <Row style={{
                                marginBottom: "-40px",
                                marginTop: "-30px"
                            }}>
                                <Col style={{
                                    marginLeft: "-90px"
                                }} > <input type="checkbox" /></Col>
                            <Col style={{
                                    marginLeft: "-90px"
                                }}>
                                <p style={{
                                    // paddingLeft: "-60px",
                                marginLeft: "-30px"
                                }}>
                                    Remember me next time
                                </p>
                            
                            </Col>
                            
                            </Row>
                      
                         
                            <button style={{
                                marginBottom: "20px"
                            }}>login</button>
                            <p className="message1">Already registered? <a href="#/"
                                onClick={Toggle}
                            >Sign In</a></p>
                        </form>
                    </div></div>
            </div>



        );
    }
    const LoginForm = () => {
        return (
            <div>


                <h1 className="titleH" >
                    welcome Back !
                </h1>
                <p className="titleP" >
                    Sign in in your account to continue
                </p>
                <div className="login-page1">
                    <div className="form1" style={{height:"450px"}}>
                        <form className="login-form1">
                            <Label for="email" className="LabelPositionning">Email</Label>
                            <br></br>
                            <input type="text" placeholder="Enter Your Email" />
                            <Label for="password" className="LabelPositionning">Password</Label>
                            <br></br>
                            <input type="password" placeholder="Enter Your Password" />

                            <p style={{color: "royalblue",
                            fontWeight: "bold",
                            cursor: "pointer"
                            }}><a href="#/">
                                Forgot your password ?
                            </a></p>
                            {/* <div style={{whiteSpace: "nowrap",}}>
                            <input type="checkbox" />
                            <p>
                                    Check me out
                                </p>
                            </div> */}
                            <Row style={{
                                marginBottom: "-40px",
                                marginTop: "-30px"
                            }}>
                                <Col style={{
                                    marginLeft: "-90px"
                                }} > <input type="checkbox" /></Col>
                            <Col style={{
                                    marginLeft: "-90px"
                                }}>
                                <p style={{
                                    // paddingLeft: "-60px",
                                marginLeft: "-30px"
                                }}>
                                    Remember me next time
                                </p>
                            
                            </Col>
                            
                            </Row>
                      
                         
                            <button style={{
                                marginBottom: "20px"
                            }}>login</button>
                            <p className="message1">Not registered? <a href="#/"

                                onClick={Toggle}

                            >Create an account</a></p>
                        </form>
                    </div></div>
            
            </div>
        );
    }
    function Toggle() {
        console.log(userIsRegistered);
        setuserIsRegistered(!userIsRegistered);
        console.log(userIsRegistered);
    }

    return (
        <div>

            {userIsRegistered ? <RegisterForm /> : <LoginForm />}
            {/* {userIsRegistered ? <LoginForm /> : <RegisterForm />} */}

        </div>
    )


}

export default LoginRegister
