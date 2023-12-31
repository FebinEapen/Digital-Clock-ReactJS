import { useState, useEffect } from 'react';
import './styles.css';

export default function App(){

//state
const [time, setTime] = useState('')



//add a 0 if the value is a one digit number
function formatTime(val){
  if (val < 10){
    return '0'
  } else {
    return '';
  }
}


//set an interval for clock tick function
useEffect(() => {
  //interval
  const timerID = setInterval(
    () => tick(),1000
  )

  //cleanup
  return function cleanup(){
    clearInterval(timerID)
  }
})

//clock tick function
function tick() {
  //date variables
  const d = new Date();
  const h = d.getHours();
  const m = d. getMinutes();
  const s = d.getSeconds();

//set the state to the formatted time
setTime(formatTime(h) + h + ':' + formatTime(m) + m + ':' + formatTime(s) + s);
}


//return the jsx
//insert the state
return(
  <div className='clock'>
    <div className='screen'>
      <h1 className='time'>{time}</h1>
    </div>
  </div>
)

}
