import { useState } from "react";
const imageNames = ['./images/image-0', './images/image-1', './images/image-2']

function App() {
  const [counter, setCounter] = useState(imageNames.length - 1)
  
  const back = () => {
    if(counter > 0){
      setCounter(counter - 1);
    } else  {
      setCounter(imageNames.length - 1)
    }
  }
  const next = () => {
    if(counter < imageNames.length - 1 ){
      setCounter(counter + 1);
    } else  {
      setCounter(0)
    }
  }
  return (
   <div className="container">
    <img src={`./images/image-${counter}.jpg`} width={300} />
    <button onClick={ () => back()}> Back </button>
    <button onClick={ () => next()}> Next </button>
   </div>
  );
}

export default App;
