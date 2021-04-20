import React from 'react';
import {motion} from 'framer-motion';
const Modal =({selectedImg,setSelectedImg}) =>{

    const handleClick=( e)=>{
        if(e.target.classList.contains('backdrop')){

        
        setSelectedImg(null);
    }}
return (
<div className ="backdrop" onClick={handleClick}>

    <img src={selectedImg} alt = "enlarged image" 
    //initial={{y: "-100vh"}}
    //animate={{y: 0}}
    
    /> 
    </div>

)

}
export default Modal;