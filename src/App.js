import React, {useState,useEffect} from "react";
import Pages from "./pages"
import axios from "axios";
import './App.css';


const App = () => {
  const [user,setUser] = useState(null)
  useEffect(()=>{
      axios.get("https://gitconnected.com/v1/portfolio/v-lax")
      .then(function (response) {
        setUser(response.data);
      })
      .catch(err => console.log(err));;
  },[]);

  if(!user){
    return <div/>
  }
  return <Pages/>
}

export default App;
