// port 3000
import React, { useEffect, useState } from "react"
import './App.css'
import Card from "./component/Card"
// import Search from "./component/Search"
import Navbar from "./component/Navbar"
const axios = require('axios')

const App = () => {
const [data, setData] = useState([])


useEffect(() => {
  axios.get("http://localhost:9000/musics")
  .then((res) => {
    const data = res.data
    setData(data)
    console.log(data.length);
  })
  .catch((err) => {
    console.log(err);
  })
}, []) 


    return (
      <div className="main">
        <Navbar/>
         {/* <h1 style={{textAlign:"center"}}>J-POP</h1> */}
        {/* <Search/> */}
         {data.map((e) => {
           return (   
            <Card key={e.eid} display={e.display} eid={e.eid} artist={e.artist} genre={e.genre} song={e.song} demo={e.demo}/>
           )
         })}
      </div>
    )
  
}

export default App