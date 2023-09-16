import React ,{ useState,useEffect } from 'react';
import './App.css';

const App = () =>{
  const [items,setItems]=useState([
    {itemName:"item 1" ,quantity:1,isSelected:false},
    {itemName:"item 2" ,quantity:2,isSelected:false},
    {itemName:"item 3" ,quantity:3,isSelected:false},
  ])

  const [inputValue,setInputValue] = useState('');
  
  const  toggleComplete=(index)=>{
    const newItems =[...items];
    newItems[index].isSelected = !newItems[index].isSelected
    setItems(newItems)
  }
  return(
    <div className="app-bg">
      <div className="main">
        <div className="add-item-box">
          <input value={inputValue} className='add-item-input' placeholder='Add an item ...'
          onChange={(e)=>setInputValue(e.target.value)} />
        </div>
        <div className="item-list">
          {items.map((item,index)=>(
            <div className="item-container">
              <div className="item-name" onClick={()=>toggleComplete(index)}>
                {item.isSelected ? (
                  <>
                  <span className='completed'>{item.itemName}</span>
                  </>
                ):(
                  <>
                  <span >{item.itemName}</span>
                  </>
                )
                }
              </div>
            </div>
         ))}
        </div>
      </div>
    </div>
  )
}

export default App;
