import './App.css';
import Cards from './component1/Cards/Cards';


function App() {
  const array = [
    {
      id:"0",
      price:"0",
      storage:"5",
      users:"sigle user",
      domain:"Free Subdomain",
      state:"free",

    },
    {
      id:"1",
      price:"9",
      storage:"50",
      users:"5 users",
      domain:"Free Subdomain",
      state:"pro",
    },
    {
      id:"2",
      price:"15",
      storage:"150",
      users:"unlimited users",
      domain:"Unlimited Free Subdomain",
      state:"pro",
    },

  ]
  return (
 <>
        <section className='pricing py-5'>
        
          <div className='row bg-primary'>
          {
            array.map((item,key)=>{
              return (
                  <Cards price={item.price} key={key.id} storage={item.storage} state={item.state} id={item.id} users={item.users} domain={item.domain}/>
              )
            })
          }
          </div>
          </section>
          <i class="fas fa-check"></i>
          <i class="bi bi-1-square-fill"></i>
 </>
  );
}

export default App;
