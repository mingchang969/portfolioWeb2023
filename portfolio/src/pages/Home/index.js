import { useState, useEffect } from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import "./style.scss";

const Home = () => {
  const [data, setData] = useState([]);
  
//   useEffect(()=>{
//     window.alert("新增成功")
//   },[data])
  
  return (
    <div className="app">
      <Edit add={setData} />
      <br />
      <List listData={data} deleteData={setData} />
    </div>
  );
};
export default Home;
