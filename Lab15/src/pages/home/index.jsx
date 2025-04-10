import "./home.css";
import {useState, useEffect} from 'react';
import PlusBtn from '../../components/buttons/plusBtn';
import MinusBtn from '../../components/buttons/minusBtn';
import ResetBtn from '../../components/buttons/resetBtn';
import CounterStyle from '../../components/counterStyle';
import AutoCountBtn from '../../components/buttons/autoCountBtn';

const Home = () => {
  const [count , setCount]= useState(0);
  const [autoCount,setAutoCount]= useState(false)

  useEffect(()=>{
    let interval = null
    if(!autoCount)return;

    interval = setInterval(()=>{
     setCount((count)=>count+1);
    },1000);

    return ()=> 
    clearInterval(interval);

   },[autoCount])

  return (
    <div className="container">
      <CounterStyle count={count}/>
      <div className="buttons">
       <MinusBtn setCount={setCount}/>
       <ResetBtn setCount={setCount}/>
       <PlusBtn setCount={setCount}/>
       <AutoCountBtn autoCount={autoCount} setAutoCount={setAutoCount}/>
      </div>
    </div>
  )
}

export default Home