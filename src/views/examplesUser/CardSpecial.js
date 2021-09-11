import PluginsCompo from "components/Components/PluginsCompo";
import React from "react";

function CardSpecial() {
  return (
    <div >
      <div className="caardspecial">
      {/* I could remove container class */}
        <h1 className="MyPlugins container">My Plugins</h1>
        <i className="fas fa-plus-circle"></i>
        <div className="separatorLine"></div>
        <PluginsCompo />

        <div className="separatorLine"></div>
        <PluginsCompo />

        <div className="separatorLine"></div>
        <PluginsCompo />
        <div className="separatorLine"></div>
        <PluginsCompo />
        <div className="separatorLine"></div>
        <PluginsCompo />
        <div className="footerCard">
<p className="viewALl"> View All</p>
<p className="first16">first 6 of 16</p>
        </div>
      </div>
    </div>
  );
}

export default CardSpecial;
