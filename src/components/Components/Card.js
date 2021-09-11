import React from "react";
import "./card_style.scss";
function Caard() {
  const imageCard =
    "https://image.freepik.com/free-vector/gradient-network-connection-background_23-2148865392.jpg";
  return (
    <div>
      <li className="caardorder">
        <div>
          <i className="iconHeart fas fa-heart"></i>
          <div className="CercleImg">
            <img
              className="ImageCard 
                                        avatar 
                                        "
              src={imageCard}
              alt="hello"
            />
          </div>
        </div>
        <div>
          <h3>iMac 27</h3>
          <p>2019</p>
          <div>
            <div className="hr"></div>

            <div  className="button w3-rest w3-white">
                 <button>View Details</button>
            </div>
           
          </div>
        </div>
      </li>
    </div>
  );
}

export default Caard;
