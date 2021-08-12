import React from "react";

function Pdffile(props) {
  return(
    <div>
    <div className="menu-flex pdf-flex">
    <div className="name pdf-flex-item">{props.name}</div>
    <div className="price pdf-flex-item">{props.price}</div>
    <div className="quantity pdf-flex-item">{props.quantity}</div>
    </div>
    </div>
  );
}

export default Pdffile;
