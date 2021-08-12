import React,{useState} from "react";
const axios = require('axios').default;
function Food(props) {
  const [id,setId] = useState(0);
  function handleClick() {
    setId(prevValue => {
      prevValue===0 ? props.add(props.id) : props.del(props.id);
      return prevValue===0 ? 1 : 0;
    });
    // axios.get("http://localhost:9000/add/"+props.id);
    // console.log(props.id);
  }
  return(
    <div className="menu-flex">
      <div className="Name flex-item"><p>{props.name}</p></div>
      <div className="price flex-item"><p>Rs.{props.price}/-</p></div>
      <div className="check flex-item"><input onClick={handleClick} type="checkbox" /></div>
    </div>
  );
}

export default Food;
