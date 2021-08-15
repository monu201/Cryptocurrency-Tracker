import "./detail.css"
import {motion} from "framer-motion"
const Detail=(props)=>{
    return( 
        <motion.div
        transition={{duration:1}}
         className="d-flex justify-content-center">
        <motion.div
         whileHover={{scale:1.1}}
         transition={{duration:0.5}}
         className="d-flex justify-content-start list">
            <div className="del "><img src={props.img} alt="logo"></img>
           <span className="name">{props.name}</span>  </div>
           <div className="d-flex justify-content-between data ">
           <div className="Sys">{props.sym}</div>
           <div className="price">Price<br></br>${props.current_price}</div> 
          {props.market_cap_change_percentage_24h >0 ?
          <div className="per green">+{props.market_cap_change_percentage_24h.toFixed(2)}%</div>
          :<div className="per red">{props.market_cap_change_percentage_24h.toFixed(2)}%</div>} 
           <div className="mt">Mkt Cap:<br></br>${props.market_cap_change_24h.toLocaleString()}</div>
           </div>
          
        </motion.div>
        </motion.div>

    )
}

export default Detail