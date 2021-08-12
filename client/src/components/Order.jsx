import React,{useState} from "react";
import {useHistory} from "react-router-dom";

import Pdfcontent from "./Pdfcontent";
import Cost from "./cost"
const axios = require('axios').default;

function Orders() {
  const history = useHistory();
  const [displayBtn,setDisplayBtn] = useState(true);
  const [arr,setArr] = useState({});
  function handleClick() {
    history.push("/")
  }

  function handleBill() {
    console.log("qwdjcjdbncjkdncjk");
    axios
    .get("http://localhost:9000/bill")
    .then(res => {
      setArr(res.data);
      setDisplayBtn(false);
    })
  }
  return(
    <div className="order-div">
    {displayBtn&&<button onClick={handleClick} className="btn">Place another order</button>}
    {displayBtn&&<button onClick={handleBill} className=" btn right-btn">generate bill</button>}
    {!displayBtn&&<Pdfcontent data={arr} />}
    </div>
  );
}

export default Orders;
