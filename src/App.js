import React ,{ useState,useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle, faPlus } from '@fortawesome/free-solid-svg-icons';


const App = () =>{
  const [items,setItems] = useState([
    {itemName:"item 1" ,quantity:1,isSelected:false},
    {itemName:"item 2" ,quantity:2,isSelected:false},
    {itemName:"item 3" ,quantity:3,isSelected:false},
  ])

  const [inputValue,setInputValue] = useState('');
  const [totalItemCount ,setTotalItemCount] = useState(6);
  
  const  toggleComplete=(index)=>{
    const newItems =[...items];
    newItems[index].isSelected = !newItems[index].isSelected
    setItems(newItems)
  }
  const handleAddButtonClick =()=>{
    const newItem ={
      itemName:inputValue,
      quantity:1,
      isSelected:false,

    }
    const newItems = [...items,newItem]
      setItems(newItems)
      setInputValue('')
      totalCalculate()   

  }
  const totalCalculate =()=>{
      const totalItemCount = items.reduce((total,item)=>{
          return total+item.quantity;
       }, 0 )

      setTotalItemCount(totalItemCount);
  }
  return(
    <div className="app-bg">
      <div className="main">
        <div className="add-item-box">
          <input value={inputValue} className='add-item-input' placeholder='Add an item ...'
          onChange={(e)=>setInputValue(e.target.value)} />
          <FontAwesomeIcon icon={faPlus} onClick={()=>handleAddButtonClick()}/>
        </div>
        <div className="item-list">
          {items.map((item,index)=>(
            <div className="item-container">
              <div className="item-name" onClick={()=>toggleComplete(index)}>
                {item.isSelected ? (
                  <>
                  <FontAwesomeIcon icon={faCheckCircle}/>
                  <span className='completed'>{item.itemName}</span>
                  </>
                ):(
                  <>
                  <FontAwesomeIcon icon={faCircle}/>
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
