import React from "react";
// import { Card } from "reactstrap";
// import profile from "../../../assets/My-Images/profile.png";
// import caard_list_obj from "./ProfilecteStyles"; 
// import { caard_obj } from "./ProfilecteStyles";
import './ProfileStyle.scss'

function Profile() {

  const divStyle = {
    marginLeft: "10px",
    marginRight: "10px",
    fontWeight: "700",
  
  }

  const pstyle = {
    marginLeft: "10px",
    marginRight: "10px",
    fontWeight: "700",
  
  }

  return (
    <div>
      {/* <AdminNavbar /> */}
      {/* <img /> */}
      <div
        style={{
          height: "150px",
          // backgroundColor: "transparent"
        }}
      ></div>

      {/* The Real Profile Page Design */}

      <div>
        <div
          style={{
            marginLeft: "40px",
            display: "flex",
          }}
        >
<div style={{
              height: "20px",
              minWidth: "50px",
              borderRadius: "50%",
            }}>
  <img
            style={{
              height: "70px",
              minWidth: "50px",
              borderRadius: "50%",
            }}
            alt="..."
            //user profile img hosted
            src="
                       https://i.ibb.co/zNBr3SD/Screenshot-2021-07-14-234407.png
                      "
          />

<div
            style={{
               position: "relative",
              top: "-30px",
              height: "30px",
              minWidth: "40px",
              borderRadius: " 0 0 150px 150px",
              // for opacity , I use the rgba
              backgroundColor: "rgba(57, 72, 204,.5)",
            }}
          >
            <a href="#/"
            style={{
              paddingLeft: "10px",
              textAlign: "center",
              opacity: "1",
              color: "white",
            }}
            >
              <i className="fas fa-pen"></i> Edit
            </a>
          </div>

       
</div>
          <div style={{width: "30px"}}>

          </div>
         {/* </span> */}

          <div>
            <h2>Mohamed Maymoun</h2>

            <p>
            <span style={{color: "black" , fontWeight: "400"}}>
              Harnes The Power Of your Dream
              </span>
              <br></br>
              johnsmith@gmail.com
            </p>
          </div>
        </div>


        <hr style={{
          marginTop:  "-20px",
          height: "0.1px"
        }}
          />

<div style={{
  display: "flex",
  marginLeft: "50px"
}}>

<div style={divStyle}>
  <p  style={pstyle}>
    20 <br/>
    Stores
  </p>
</div>

<div style={divStyle}>
  <p  style={pstyle}>
    20 <br/>
    Purchases
  </p>
</div>

<div style={divStyle}>
  <p  style={pstyle}>
    20 <br/>
    Customers
  </p>
</div>

<div style={divStyle}>
  <p  style={pstyle}>
    20 <br/>
    Users
  </p>
</div>

<div style={divStyle}>
  <p  style={pstyle}>
    20 <br/>
    Followers
  </p>
</div>



<div style={{
  width: "400px"
}}>

</div>
{/* Button */}
<div>
  <button  style={{marginBottom: "10px",
    // position: 'relative',
  // bottom: '60px',
  // left: '920px',
  borderRadius: '7px',
  border: 'none',
  backgroundColor: '#d9d9d9',
  color: 'white',
  width: '150px',
  height: '40px'
   }} > <i className="fas fa-plus-circle" style  = {{
     position: "static"
   }}></i> Create a Store</button>

</div>


</div>

<hr style={{
          marginTop:  "-20px",
          height: "1px"
        }}
          />
          

<div style={{display: "flex",
gap: "30px 30px",
alignContent: "center",
alignItems: "center",
//justifyContent: "center",
             marginLeft:"100px",
             marginBottom:"300px",

}}>

{/* Card 1 */}
<div>
<div className="card1 card-1" style={{
  display: "flex",
// gap: "30px 30px",
flexDirection: "column",
// alignContent: "center",
// alignItems: "center",
//justifyContent: "center",

}}>

{/* <h1 className="hide" >
Check More
</h1> */}

<div style={{
  flex: "1"
}}>
  <img maxWidth="200px" height="78px" src="https://utiee.com/img/cms/about-us/1-about-utiee.jpg" alt="beautyWomen1" />
</div>

<div style={{
  display: "flex",


}}>
  <img style={{
  flex: "2.5"
}}  width="100px" Maxheight="35px" src="https://utiee.com/img/cms/about-us/1-about-utiee.jpg" alt="beautyWomen1" />
  <div style={{
    flex: "1",
    width: "20px",
    backgroundColor: "black"
  }}>

  </div>
  <img  style={{
  flex: "2.5"
}}  
width="100px" Maxheight="35px" 
src="https://utiee.com/img/cms/about-us/1-about-utiee.jpg" alt="beautyWomen1" />



</div>
</div>
<br />
<h3 style={{
  marginLeft: "30px",
  marginTop: "-10px"
}}>
  Beauty Store
</h3>
</div>

{/* Card 2 */}

<div>

<div className="card1 card-1" style={{
  display: "flex",
  backgroundColor: "grey",
// gap: "30px 30px",
flexDirection: "column",
// alignContent: "center",
// alignItems: "center",
//justifyContent: "center",

}}>

{/* <h1 className="hide" >
Check More
</h1> */}

<div style={{
  flex: "1",
  maxWidth: "200px",
   height: "83px"
}}>
  <img 
  // maxWidth="200px" height="83px"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }}
   src="http://img01.yun300.cn/repository/image/Zf2GUz0xTHCS47Y0jwmryg.jpg?tenantId=157297&viewType=1" 
   alt="beautyWomen1" />
</div>

<div style={{
  display: "flex",


}}>
  <img style={{
  flex: "2.5"
}}  width="100px" Maxheight="35px" 
src="http://img01.yun300.cn/repository/image/Zf2GUz0xTHCS47Y0jwmryg.jpg?tenantId=157297&viewType=1"
 alt="beautyWomen1" />
  <div style={{
    flex: "1",
    width: "20px",
    backgroundColor: "black"
  }}>

  </div>
  <img  style={{
  flex: "2.5"
}}  
width="100px" Maxheight="35px" 
src="http://img01.yun300.cn/repository/image/Zf2GUz0xTHCS47Y0jwmryg.jpg?tenantId=157297&viewType=1"
 alt="beautyWomen1" />



</div>
</div>
<br />
<h3 style={{
  marginLeft: "30px",
  marginTop: "-10px"
}}>
  Electronic Store
</h3>
</div>


{/* Card 3 */}

<div>

<div className="card1 card-1" style={{
  display: "flex",
  backgroundColor: "grey",
// gap: "30px 30px",
flexDirection: "column",
// alignContent: "center",
// alignItems: "center",
//justifyContent: "center",

}}>

{/* <h1 className="hide" >
Check More
</h1> */}

<div style={{
  flex: "1",
  maxWidth: "200px",
   height: "83px"
}}>
  <img 
  // 
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }}
   src="https://st3.depositphotos.com/1000874/13916/i/600/depositphotos_139163196-stock-photo-set-of-food-products.jpg" 
   alt="beautyWomen1" />
</div>

<div style={{
  display: "flex",


}}>
  <img style={{
  flex: "2.5"
}}  width="100px" Maxheight="35px" 
src="https://st3.depositphotos.com/1000874/13916/i/600/depositphotos_139163196-stock-photo-set-of-food-products.jpg"
 alt="beautyWomen1" />
  <div style={{
    flex: "1",
    width: "20px",
    backgroundColor: "black"
  }}>

  </div>
  <img  style={{
  flex: "2.5"
}}  
width="100px" Maxheight="35px" 
src="https://st3.depositphotos.com/1000874/13916/i/600/depositphotos_139163196-stock-photo-set-of-food-products.jpg"
 alt="beautyWomen1" />



</div>
</div>
<br />
<h3 style={{
  marginLeft: "30px",
  marginTop: "-10px"
}}>
  Food Store
</h3>
</div>








</div>



{/* New Part */}

<div style={{
  backgroundColor: "#b8b6b6",
  width: "100%",
  height: "300px",
  marginTop: "-250px",
  marginBottom: "50px"
  }}>
<p style={{
  color: "black",
  fontWeight: "400",
  marginLeft: "30px",
  marginTop: "40px"

}}>Store Work in free Plans - upgrade now tp Gold plan to get more offers</p>

{/* Flex for three cards */}
<div style={{display: "flex",
gap: "30px 30px",
alignContent: "center",
alignItems: "center",
//justifyContent: "center",
             marginLeft:"100px",
             marginBottom:"300px",

}}>



{/* Card 4 */}
<div>
<div className="card1 card-1" style={{
  display: "flex",
flexDirection: "column",
}}>

<div style={{
  flex: "1",
  maxWidth: "200px",
   height: "83px"
}}>
  <img 
  // 
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }}
  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIREhISEhESERISERISEBIRERQSEhIRGBQZGRgaGBgcIS8mHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40QzYBDAwMEA8QGBIRHTQhGCExMTExNDE0NDExNDQ0NDQ0NDQ0NjQxNDE0NDE0NDE0NDQ0NjQxNDQ0NDQxNDQ0MTQ0P//AABEIAJoBSAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIEAwUGB//EAEAQAAICAQICBwUECAQHAQAAAAECABEDEiEEMQUGEyJBUWEyQnGBkRRSobEHI2KCksHR8BZysvEVJDNTg6LhdP/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAcEQEBAQEBAQEBAQAAAAAAAAAAARECIRIxcVH/2gAMAwEAAhEDEQA/APVhJRCOAxHEJKUEkIhHIHGIoQHC969LiuK+9+6fzlGQRyAMkDAlGIhHAIQjgEIQgOEISAhCEAijigEDCEBQhCUIxGOKASJkojAiYRxSBGKSMRlETFJRSCMRkojKIwhCQIRwjEBiMRRwGI4CMSgEcBCApyfWvrBk4XKiYxppO1YkKQ6A0y78iCVM6bieFx5V0ZEDrYNHlY/3nO8X1T4bPkBONER+HygFRTq/aIcbj4KD/FINx0L0tj4vGHQi676+R/pNiJ470n0rk6EzDWCzkkDGuyZl++D4Lyv1M9R6udKjjeEwcUMbYxmTXofcjvEHfxG1g+IIlG0ElIyUAjhCQEcIQCEIQCEIQCEIQFCOEBRRxQCKOKUKEIQIxSRkYChHAyCMRjgZRExGOKBEwjMICjEQkhAcYikhICMQjEoIQjgQyGlYjmFJH0kUUAqByCMB8LWZCt2PPaY8JvQT447Px7sCj0x1f4XjdH2rh8efsiWx6gbUmr3BFg0LB2NCbLFiVFVVUKqgKqqAFVQKAAHIScYgAEcI4BHCEgIQhAIQhAIQhAIQhAIQhAIo4QIwjilCMUlEYCkTJQgQikopAopIxSiJikjIyBGEIShCSiEcBiOAjEgBHAQgOEBJSgmDD7g8ldf4WA/lM8wYeY+Ob/XAsCOE826z9ZOMw8blXHm7HFh0qEONHViUVyzWLrfwPwiTUr0oQnmnDdeeMBXWvC5Bp9kJkxM5+8ram5eWnf0l9evzBQX4ZAbIteKpSboVqQV8D+MvzTY7yE4T/H52H2QX43xFUPhosfMASK9f31IDwaaTfaEcVZUeBUdn3hXqJPmmx3sJxL9e/u8IxFbXnVb8vdMivX373CVtvXEK3e/hG3Pc1y5GPmmx3EJxqde0I34bIDW47RDR9PEj1qRHXsHlwpPPbtluv4a8/GPmmx2kJxR6+UL+ynn/AN9Rt812+dSJ6+8/+VJ/84r/AE7f/I+abHbwnEP17orXC2CBqJzgEHxAAU6h8PpMA6+5u8TweIC+6ftjDbx1Xh7p+MfNNjvoTgMvX3Lq0rwuHldNxba+e/dGLYV4zC/X/MQdODh050TnfKOXkEXUR5AmX5pseiwnk/Gdf+O07DChHeJTGbZQeYDOe75+M9S4XLrRH++itty3AP8AOSyz9JdZ4o4jIpQhCURMIQgRMUkZGAoGOBgRiMcRkChAwlBUkBHUYEgVRgRgSQEojUYElUdQI1CpOo5BECV8HuH7yu38RDfzlqVcPuD7upP4dh+Av5wLM8b6/E/buICrbXjYBdRYnssaiwOY8fLuz1XpjpFOFwvlfcKO6PvMeQ/vwBnkXS3TLu75WCl3Iuh8hQ+6tD6fOb4nus1zuXBnxrq7JipIJUKGZiQCWZQCRXgDMWLpIkk6qb2S2kashBPdC6SB8fWbzF0nrJDAg+YFrZJFivA7fWUuleBTKrZEoZQAVZffF3pI8z589/WdNTFVOPIFbqANwCT2f+Zq74vwmReMI23o76e8H5i2Q+6PQCc2M/I+XJSPCjud+fpMq8R4WQpPtC9RII9dhL4jo/8AiP7QazQILU58gKoMPM7xHj/XkO9vbY9uT/fHhOeHEne9tqIAJCjfcC6v4/1ibiDt4V7PPvbe9vKOh+3WR7VjddJYXy7yfdXnayQ4/b2hvVEWqZD5KK7res5scR6mufIg35c9hJ/aTz8eRAulG+678/WEdC3SHO2qtmY6iqHbZwR3z6xfbzY2a9+6GOsi+aOOS+k5/wC0HatyBtYNMKG5N7n8JBuIO+5rne9hvIb7CB0A46hsbBvwYK5r3PuH5Rv0iRZ1HY0SbJx8tmGnvHluZz44o863PtDfuj9nfn6yLZzsBv4Kd7awNm33Mitxk6RqgRtqH6sHvE6tmVtNn4SxiTicin9Xk2AOqjjtfvKvd7w25A7Ay90X0emBQaU5DsWI9m/dXnVHy+czcT0tpK6VN603Ox7xNcrPMj8fKNXEOh+EfiHXDpZHytoO1FSx0s+4F7MG5e7Pd8WMKqqooKAqjyAFCeN9G9KNjdMqaQ6ta0NQJ9lgL/eF+W89Z6L6QXiMCZh3QyksLvSwJDC/GiCL9Jy7WL8Jpl6w4WNIGcaVYMCukqwJBBv9kzPg6XxOa3XfTbVV+XOYabKKpjx5Va9LK1bHSwNH1qZYEaiqDuFFkgDzJqUsvSiD2bY3XkPrAuVFU1qdIOx2CqOW25JJ2G/j/WbWpRjqKpkqKoGMiFSdRVAgRCSIhIGBHUBHAIxFHKHHI3C4HE9Y+muM4XOwRwyMC+NXVVXRS2Ax94Udj6x8D+kDGbHEYnxEMBqWitbWdJN+N0LNTY9duje24cuBb4rbbmcZ2evWt/SeWcSiuWLbvpDEhbvR3WG25NjnzkHt3A9IYuIUtiyLkANHT4Gr3BkjtkA+8NXzqj+AWeD68mIuUZ1J0r2ikqTW40sK+6OW867onr9mQ/8AMqM6qCFdaTJ86FNdDy5QNv8ApI4o3iwjkFbI3hZPcXfw978Z5bx2eyDqAUnvMR7SNWpQPIaj6ztet/SuLisiZcbGvsyK6sAHRtTllPn7S7ix5GcDxrbk7WpBcb9z2KK1zHhOvP4z0WLNTvRdSCw8AQe0JrY1Y9PUTaPxIC2eYJ5qBYDenMcq+U0an9Y/e9+u7X3t6/Ey1h4gg6975ojAkAbgsSDe9jl5TSBerjuWyNkXGGZiFA1GybAJJAvflLadVEuu1yXvtpT+/OY048kg6iNRCjJp7+5qt+Sib7jsWPAAurJmbnpRVx4g187bUSfWZtkyLJb+NP8A4VxitWbJRNbBLPPxqNequOjebJexPdW1FeO20vcJwfE52tGTGprUzFbYeTcr+gm6/wCGcPgS82bI591cQUBD+wBdfEmOupM1Zxa5c9VMfhlyGwSo7lkbHy3j/wAKYzf63JsaJpPPxM2p4btG08PjyBLt+0ZCuQnxcBRf1lHic2RMrYgdbpSlsYLFbXVpQAHV6j0Ms6iXmxW/wrj5drk1ULoLsDtyq5I9VMJ37bJvsvsVfldbmZzj4o7Dhsnohxv2fO9XL2ph4vNkxkLlTImobHJjZXcX7O+2jwidS+SpZZ+xifqom+nNkNc9kNHnvVVKrdXXxOmQOHVWD6QmknSbFbnfa5ZXj2ugBqUAhSP1eMb7ob5/3vD/AImx3u1J3JHeduXeF7iXDVrNxRIGnUbDext7poavP/fwmmytrdVOoA9n7Js8wP8Ab4XMr5LbVzBIDgbBHPivmDZHxlXA1ZBsNsdnnQCiyR8Au0DdcHxBbcjf2qGwseyvo1n5z1D9HnFA4s6Me6hVyWIqipVvQDuD6meSdGnle5seO717/wC7PS+ogPYccSbrAovbfu5Nx5XV/OZ6/F5ZuPw4eJcr2Wfh0wu6IqYQMToDQZNIIogCjNgekMfC4nzDhsmXs1xqh0HWWAKgaiCfHcn8TK3Q6MyggGq3PIfWb3WV5G/Wz+E5tNX1W6wJkVgU4lsuTIcnEO2LTjV3GyjvGlVVCjxpRe5m64jpQ+4teZbcj4CUshJ5kn1O7CYtzfL132MgeTIzHvMWo7Wb5yKpYBOw8PMnlJAV6mq3G30goLNQ3JP5bD85Rf6MxamBqlSyB6nl+V/SbmV+Fw6EC+PM15zPcgUIQlCMUZiMAhCEgISNwuBKK5G4iYErhciTFqlBlQOCpuiCDy5EURR2PznkHWDo5+FzsjClLsuNvBkcELR/dX5kz17VOW688Kr4VybalJQgi9aEFiK8a0k/DVIPMWPeBFbopIJNHYVY/nIBRsRpQ7kqSxXUOVNVjl4/zkFexa0DpUBT7Pnz3I/GAcj2hp3ABaq9KrnAkmoGyCGPvN3Qo9D9eXrVzY8Dx5QAFFdBsWyC7JPu+J32rlvXwoBwARdhiCdZ7t+i/wB85mxZVsEjSfvDZbArbVuBV/X1NyyXyrLZ7Fbpjgny5GyJjxhWAtcaDG1KRbMt2x35j09Jz+dxZHIAnmN2IoVV+H8p23D6TydBy9ost1qI8LO9eJ5nxG50r0fwzoe2ddQFLkRQHGlaAvxHLbf2tuW3Tjr58Y6m+uHDkb7aqo2BSC+UmM7LSq7Bb20miTfoeXwkeyIPPx5nUA4v84uy25Gvu961N/DlOtrKyvSWYGkyZLPtaTy28In6Y4kj/rZK92mPe/GVhjNG9zRu7IbblIFDzr4itwfMj6fSc7m/jXv+s78bkYFWyO6t7eti3yFnYSPCvebADyHEYdFADbtE5+MwjGa+I3Fnvbe7tMmBNOTEedZsRB37v6xdjc1fxHWY+LbHjyZLvSgYLqoMwHL5naa7rKGyPjyY0Z1ONVLojOtWSBqG1947fGXUdg3DEErq4zCNjVguQR/8ljgOkOM+zhxnyEZHzFmd2yP3chQAayQo7p2FTnz5djVvnrXcJ1U4zIisq4zj2ZayYy4NeJB2PpfhKnSPQvFcNTZ8WgMRjDhsTq12QKRjRrzqWOHyMxDMSXJYs3IltRH9JLphLwLRo9stneyAj+Xxjnrr69sz+LZznku/1qMbr47oNrOm1sctqNf0j4Y/rD7JOhgV+8wU7D5j6CQVCCNjqsUp8BXM/wB+MnwSEsTzADUOQLHZrA3rc/Op1rm2PAJtsfIjwrSASg9Oe/lPW+pvDaOAz5CLGXtSvmyIhX4jvB/7M836I4RsjhRtq0F2rZBvZrw+HjPWuC4/HjxoiDSmNQqj0Arf1mOq1IxcFxmJ0UBTjAAAUcht5/z9BMzuB974kAeH9f5+c1TcVjXIyqQBdqDtQPhNliyBq328ZhpFswPl+cg2S/An48vqZsODRNyQu5uqHylpuExN7g+RI/KBozfjttyH9Zf6NxkOCwpTyFVudRBr907y/h4XGm6qLHibJ/GR4k0wb0v+FgfyLQLtxXIaoaoE7hchcdwJQkbhcgdxyEJQrhcVwuQO4orjuAGRIkrkSZREic/1mGs4cXPWWv8AfZMH+nM5/dm/LTm+O4tPtyB3CrjOPVd0NGPI53/zZsX8IgHS/U/huILOoOHI1kvj9ktXvIdvpU549Q84NDPjK1uxDA+OwUfLx8T8+3XpXh2NDiMJPkMqX9LmYZ0bkyt8CD+UDzXpfqqnCIrNk1s5PsJ2fKvEGzz/AAnP49m5CgVuq3Bv0vbbx853vX7MOzxD1yX/AOs4Ftd7KpQkamZ9IA8fDfa5Bu+G6v8AE8WrZMOdcShymnSRuACSCvxH0mB/0fcYTZ4jEx8GKuSPmTYnYdS+IT7MUvvLkbV8wCD8CJ0WtZdR5Sf0ecV/3cPw0HnKnSfU3ieGxnI+TG3eVEVVOt2ZgiotnmSQJ7ASJW4nhceTQXQN2bjIl+64BAYetMfrLtMeU8X1H4nFjyZHyYiuPG+RlAJNKpY0fPaPD1F4p9RGXFs+TGSQ1koxRt/K1M9N6R4Q5MOXGBvkxZMYJO1shUX9ZHo3g3THTrTNkzZCA2rT2mZ3AvxoOB8pNpjyvF1M4jt8nD9piV0xplQspIfGxKkofDSwoj9oeczZ+pubABlyZMbJjdGZUBDMwYafxqerHo5GdchQF0VlRveVWrUAfI6V+gjz9Gq6lXUMp5hhYMbVx5DlchuDrn9twEfVjNx0Qqjo3GzMq9/irJIAH/M5J2OfqbwzlSMego6OpQ0QysCKuxzE1OT9GXDMe8+Zl1Mwxl1VASbNBVFSDhsCjmDYskEcpteA6HycarYsbqjI3aEuuoVWnb1szcp+jvJjGjFmTQCSodW1CyTuRd85v+rXVvJwjO7uj6000qkVuDdn4eUDkR+jzieXb4vX9W2/zu5c4bqBkBBfiFP+RK+VmejDFDspramOe6O6ATCAq16nxPxm4x8IB5S12cNG0iq54ZBz0/Oo14YCtlBO9UNv72kmuYi3zgWA4U0Rf+WmHz8plTKPMfNgJUXJ6SfaQLqufT6k/wApHLZAsirrYfeBXz9ZVGk+AkiAfE/UwLmN7VT5gX8amTVNfhahXkTMweBbDR3K6vJhoGW4XIXC4E7hIXCQR1QuQuFyieqGqQuFwJapFniJmNzAxcXxGRVvGgdr3U5Oz28waO/LaaHh+KGPiXbJfaHGXIxo+SmyvWkaQSaTDjF0L9JtuN4pMS631BbA7qPkNnl3UBMp8BbHJkKsvauGRXFMMaoqrY8LIZq5jVvvAm/SbNsvD5XHm6pjX5h2B/CVMuN39rheEUebjtT81CAfjNkfhIMD5GBqH6Nvm64//wA+JcQ/9i0z4OHfGAMZxsB4OgVj++n5lTLro0QxmBrMwyfaEc9pw/aL2TvibG6M4Np7QP7S2VHuzoUeUOI4PWjIbGobMOasDasPUEA/KS4JsxJXJhKaR/1FdGxuf2ReofMfWBsRUNMSoZMLAQSSCRgSQEAVZMLIiSECQEdRQgOoVCEAqRKyUIENENEnGIGBsIPMSJ4ceUs1FUCqeHERwS3phpgU+yjGOWtMNMCr2Iu63HKZAsyVCoCVZNRACSAgEJKoVIIwkoQMMIQgEKhCUKoislCQYykgcUzwgYOyh2MzxwK/YRjCJnMcoxDEJMY5ISUDHoj0ScIGOoVMkIEKjAkoQI1HUcIChUcIBCEIBGIpKAoozFAIQhAIQhICEIShiSEjJCQEIQgEIQgf/9k="
   alt="beautyWomen1" />
</div>

<div style={{
  display: "flex",


}}>
  <img style={{
  flex: "2.5"
}}  width="100px" Maxheight="35px" 
src="data:image/jpeg;base64,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"
 alt="beautyWomen1" />
  <div style={{
    flex: "1",
    width: "20px",
    backgroundColor: "black"
  }}>

  </div>
  <img  style={{
  flex: "2.5"
}}  
width="100px" Maxheight="35px" 
src="data:image/jpeg;base64,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" alt="beautyWomen1" />



</div>
</div>
<br />
<h3 style={{
  marginLeft: "30px",
  marginTop: "-10px"
}}>
  Furniture Store
</h3>
</div>

{/* Card 5 */}
<div>
<div className="card1 card-1" style={{
  display: "flex",
flexDirection: "column",
}}>

<div style={{
  flex: "1",
  maxWidth: "200px",
   height: "83px"
}}>
  <img 
  // 
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }}
  src="https://img.freepik.com/photos-gratuite/boutique-vetements-boutique-vetements-cintre-boutique-moderne_1150-8886.jpg?size=626&ext=jpg&ga=GA1.2.2079899045.1626393600"   alt="beautyWomen1" />
</div>

<div style={{
  display: "flex",


}}>
  <img style={{
  flex: "2.5"
}}  width="100px" Maxheight="35px" 
src="https://img.freepik.com/photos-gratuite/boutique-vetements-boutique-vetements-cintre-boutique-moderne_1150-8886.jpg?size=626&ext=jpg&ga=GA1.2.2079899045.1626393600"
 alt="beautyWomen1" />
  <div style={{
    flex: "1",
    width: "20px",
    backgroundColor: "black"
  }}>

  </div>
  <img  style={{
  flex: "2.5"
}}  
width="100px" Maxheight="35px" 
src="https://img.freepik.com/photos-gratuite/boutique-vetements-boutique-vetements-cintre-boutique-moderne_1150-8886.jpg?size=626&ext=jpg&ga=GA1.2.2079899045.1626393600"
alt="beautyWomen1" />



</div>
</div>
<br />
<h3 style={{
  marginLeft: "30px",
  marginTop: "-10px"
}}>
  Eagle Store
</h3>
</div>

{/* Card 5 */}
<div>
<div className="card1 card-1" style={{
  display: "flex",
flexDirection: "column",
}}>

<div style={{
  flex: "1",
  maxWidth: "200px",
   height: "83px"
}}>
  <img 
  // 
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }}
  src="data:image/jpeg;base64,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"   alt="beautyWomen1" />
</div>

<div style={{
  display: "flex",


}}>
  <img style={{
  flex: "2.5"
}}  width="100px" Maxheight="35px" 
src="data:image/jpeg;base64,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"
 alt="beautyWomen1" />
  <div style={{
    flex: "1",
    width: "20px",
    backgroundColor: "black"
  }}>

  </div>
  <img  style={{
  flex: "2.5"
}}  
width="100px" Maxheight="35px" 
src="data:image/jpeg;base64,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"
alt="beautyWomen1" />



</div>
</div>
<br />
<h3 style={{
  marginLeft: "30px",
  marginTop: "-10px"
}}>
  Eagle Store
</h3>
</div>





</div>


</div>











      </div>


    </div>
  );


}

export default Profile;
