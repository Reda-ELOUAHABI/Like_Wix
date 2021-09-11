import React from "react";

function PluginsCompo() {
  const imageCard = "https://cdn.iconscout.com/icon/free/png-512/figma-682083.png"
  return (
    <div className="RowPluging">
      <div className="ImagePlugins">
        <img className="avatar " src={imageCard} alt="Icon_Image" />
      </div>
      <div className="plugingTitle">
        <h4> 2 requested Items</h4>
        <p>3 min ago</p>
      </div>
      <div className="cloudIdea">
      
        <div className="trianglecloud"></div>
      <p className="inProgress">
          in Progress
      </p>
      </div>
    </div>
  );
}

export default PluginsCompo;
