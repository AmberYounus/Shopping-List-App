import React ,{ useState,useEffect } from 'react';
import './App.css';

const App =()=>{
  const [items,setItems]=useState([
    {itemName:"item 1" ,quantity:1,isSelected:false},
    {itemName:"item 2" ,quantity:2,isSelected:false},
    {itemName:"item 3" ,quantity:3,isSelected:false},
  ])
  return(
    <div className="app-bg">
      
    </div>
  )
}

export default App;
