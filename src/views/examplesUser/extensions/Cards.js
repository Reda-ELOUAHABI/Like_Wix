import React from "react";

function CardsExtension(props) {
  return (
    <div className="card">
      <div className="cardInsider">
        <div>
          <div>
            <img className="imageExtension" src={props.imgURL} width="100" alt="imageExt" />

            <div className="activeDiv">Active</div>
          </div>
        </div>

        <h1>Lorem ipsum dolor sit amet.</h1>
        <p
        style={{
            //color: "red",
            marginBottom: "-10px",
        }}
        >
          content for card one Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Veritatis, iusto atque obcaecati pariatur delectus
          maiores? Accusantium consectetur eos et ea!
        </p>

        <hr />

        <div className="btmBtn">
          {" "}
          <button className="btn Disablebtn">Disable</button>
          <button className="btn Deletebtn">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default CardsExtension;
