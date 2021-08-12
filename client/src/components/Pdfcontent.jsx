import React from "react";
import Pdffile from "./Pdffile";
import Cost from "./cost.jsx"

const ref = React.createRef();
function Pdfcontent(props) {
  function handleMap(elem) {
    return (
      <Pdffile name={elem.name} price={elem.price} quantity={elem.quantity} />
    );
  }
  return(
    <div>
    <h2>Eat More Restaurant</h2>
    <Pdffile name={"item name"} price={"price"} quantity={"quantity"} />
    {props.data.items.map(handleMap)}
    <Cost  cost={[props.data.costBt,props.data.tip,props.data.costAt]}/>
    </div>
  );

}

export default Pdfcontent;
