import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { data } from './data';
function App() {
  const [count,setCount] = useState(0)
  const handleClick = (index)=>{
    if(data[index].buttonColor === "outline-dark"){
      data[index].buttonColor = "secondary";
      setCount(count+1);
    }
    
    
  }
  return (
    <>
    <Navbar value={count}/>
    <div className='text-center discription bg-dark p-5 '>
      <h1 className='text-white '>Shop in style</h1>
      <h4 className='text-secondary '>With this shop homage template</h4>
    </div>
    <div className='row container m-5'>
        {
           data &&  data.map((item,index)=>{
                return (
                 <div className='col-md-3 ' key={index}>
                    <div className='card mb-5 h-80' style={{width:"18rem"}}  >
                    {
                      item.sale && <span class="badge bg-dark rounded-pill position-absolute"  style={{top:"0.5rem",right:"0.5rem"}}>sale</span>
                    }
                        <img height="200px"  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                        <div class="card-body">
                             <h5 class="card-title text-center">{item.product_type}</h5>
                             <p className='text-center small'>{item.stars?"⭐⭐⭐⭐⭐":<br />}</p>
                             <p className='text-center'>{item.price}</p>
                             <div className='text-center'>
                             <button className={`btn btn-${item.buttonColor} `} onClick={()=>handleClick(index)}>Add to Cart</button>
                             </div>
                        </div>
                    </div>
                 </div>
                )
            })
        } 
        </div>
        <div className='text-center p-5 bg-dark'>
          <p className='text-white'>Copyright© NANDIMANDALAM SUNNY 2022</p>
        </div>
    </>
  );
}

export default App;
