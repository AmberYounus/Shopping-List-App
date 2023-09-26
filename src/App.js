import React ,{ useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronLeft, faChevronRight, faCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () =>{
  const [items,setItems] = useState([
    {itemName:"item 1" ,quantity:1,isSelected:false},
    {itemName:"item 2" ,quantity:2,isSelected:true},
    {itemName:"item 3" ,quantity:3,isSelected:false},
    {itemName:"item 4" ,quantity:3,isSelected:true},
  ])
 
  const [inputValue,setInputValue] = useState('');
  
  const [totalItemCount ,setTotalItemCount] = useState(4);
  

  const handleAddButtonClick = () => {
    const newItem = {
      itemName:inputValue,
      quantity:1,
      isSelected:false,
    }

    const newItems =[...items,newItem] 
    setItems(newItems)
    setInputValue('')
     totalCalculate()
  }

    const handleQuantityIncrease =(index)=>{
      const newItems =[...items]
        newItems[index].quantity++;
        setItems(newItems)
          totalCalculate()
    }

    const handleQuantityDecrease =(index)=>{
      const newItems =[...items]
        newItems[index].quantity--;
        setItems(newItems)
          totalCalculate()
    }

    const  toggleComplete = (index)=>{
      const newItems =[...items];
      newItems[index].isSelected = !newItems[index].isSelected;
      setItems(newItems)
    }
  
  const totalCalculate =()=>{
      const totalItemCount = items.reduce((total,item)=>{
          return total+item.quantity;
       }, 0 )

      setTotalItemCount(totalItemCount);
  }
  return(
    <>
    <div className="app-bg">
      <div className="main">
        <div className="add-item-box">
          <input value={inputValue} className='add-item-input' placeholder='Add an item...'
          onChange={(e)=>setInputValue(e.target.value)} />
          <FontAwesomeIcon icon={faPlus} className='faPlus' onClick={()=>handleAddButtonClick()}/>
        </div>
        <div className="item-list">
          {items.map((item,index)=>(
            <div className="item-container" key={index}>
              <div className="item-name"   onClick={()=>toggleComplete(index)}>
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
              <div className="quantity">
                <button>
                  <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)}/>
                </button>
                <span>{item.quantity}</span>
                <button>
                  <FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)}/>
                </button>
              </div>
            </div>
         ))}
        </div>
        <div className="totalItems">Total Items : <b>{totalItemCount}</b> </div>
      </div>
    </div>
 </>
  )
 }
export default App;
