import './App.css';
import { useState,useEffect} from 'react';
import axios from "axios"
import Del from "./detail"
import {motion} from "framer-motion"
function App() {
  const [coins,setcoins]=useState([])
  const [search,sets]=useState("")
  useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false").then((res)=>{
      setcoins(res.data)
   }).catch(e=>{setcoins([{name:"error"}])})
  },[])

  const con={
    hidden:{opacity:0},
    visible:{
      opacity:1,
      transition:{
        duartion:3,
        type:"spring",
        ease:"easeIn",
        when:"beforeChildren",
        staggerChildren:2}}
  }

  const c={
    h:{opacity:0},
    v:{opacity:1,transition:{duration:1,type:"spring",ease:"easeIn"}}
  }


  const fil=coins.filter((c)=> {return(c.name.toLowerCase().includes(search.toLowerCase()))})

 
  return (

    <motion.div 
    variants={con}
    initial="hidden"
    animate="visible"
    className="App">

       <h1>Cryptocurrency Tracker</h1>
      <form className="d-flex justify-content-center">
      <i className="ri-search-2-line"></i><motion.input 
      whileFocus={{scale:1.05}}
      transition={{ease:"easeIn",duration:0.3}}
     
      type="text" name="currency" value={search} onChange={(e)=>{e.preventDefault();  sets(e.target.value)}} className="search"  placeholder="Search">

      </motion.input>
      </form>
      <h4> <a href="https://www.linkedin.com/in/pr-monish-prasad-952a17206/">By Monish Prasad</a></h4>
    
 
    <div>{fil.length>0 ? <motion.div
     variants={c}
     initial="h"
     animate="v"
     >
       
      {fil.map((d)=>{return (<Del
      key={d.id}
         img={d.image}
         name={d.name}
         current_price={d.current_price}
         market_cap_change_percentage_24h={d.market_cap_change_percentage_24h}
         market_cap_change_24h={d.market_cap_change_24h}
         sym={d.symbol}
         ></Del>)} )}
         </motion.div>:<div className="false d-flex justify-content-center"><i className="ri-emotion-sad-line sad"></i>No Result Found</div>}</div>
    
    </motion.div>
  );
}

export default App;
