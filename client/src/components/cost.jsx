import React from "react";
import jsPDF from 'jspdf';

function costFlex(props) {
  function handlemap(elem,index) {
    return(
      <div classname="cost-flex">
        <div className="cost-flex-item">
        {index===0 && <h2>Cost(without tip)</h2>}
        {index===1 && <h2>Tip</h2>}
        {index===2 && <h2>Total</h2>}

        </div>
        <div className="cost-flex-item">
          <h2>{elem}</h2>
        </div>
      </div>
    );
  }
  function handleClick() {
    props.onClick();
  }
  return(
    <div className="cost">
    <h3><span className="header">Cost(without tip):</span> <span className="def">Rs.{props.cost[0]}/-</span></h3>
    <h3><span className="header">tip:</span> <span className="def">Rs.{props.cost[1]}/-</span></h3>
    <h3><span className="header">cost(including tip):</span> <span className="def">Rs.{props.cost[2]}/-</span></h3>
    </div>
  );
}

export default costFlex;
