import React,{ useState,useEffect } from "react";
import Food from "./Food";
import {useHistory} from "react-router-dom";
const axios = require('axios').default;
function Menu() {
  const [dish,setDish] = useState([]);
  const [ids,setIds] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
    .get("http://localhost:9000/getDishes")
    .then( res => {
      console.log("mjfj");
      if(res.data)
      setDish(res.data);
    })
  },[])
  function handleArr(elem) {
    return <Food name={elem.name} price={elem.price} id={elem.id} add={add} del={del}/>
  }
  function add(key) {
    setIds(prevValue => {
      return [...prevValue,key]
    })
  }
  function del(key) {
    setIds(prevValue => {
      let arr = prevValue.filter(item => item !== key)
      return arr;
    })
  }
  function sendData() {
    console.log(ids);
    axios
    .post("http://localhost:9000/add",{ids})
      history.push("/orders")
  }
  return(
    <div>
    <h2>Eat More Restaurant</h2>
    {dish.map(handleArr)}
    <div className="btn-div">
    {ids.length===0 ? <button disabled onClick={sendData} className="btn">Place your order</button> :<button onClick={sendData} className="btn">Place your order</button>}
    </div>
    </div>
  );
}
export default Menu;
