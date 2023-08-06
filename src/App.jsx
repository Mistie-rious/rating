import { useState } from 'react'
import './App.css'
import illustration from './assets/images/illustration.svg'
import star from './assets/images/star.svg'
import { Link } from "react-router-dom";
import Thanks from './thanks';

function App() {
  const [number, setNumber] = useState()
  const [showThanks, setShowThanks] = useState(false)

  const handleButtonClick = (value) =>{
    setNumber(value)

  }


  if (showThanks) {
    return <Thanks score={number} />;
  }
  

  return (
    <>
      <div className='body'>
        <div className="container">
          <div className="star">
            <div className="circle">
            <img src={star} alt=''></img>
            </div>
            
          </div>
            <h1 className="heading">How did we do?</h1>
              <div className="smalltext">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering.</div>
                <div className="numbers">
                  <button className="circles" onClick={() => handleButtonClick(1)}>1</button>
                 
                  <button className="circles" onClick={() => handleButtonClick(2)}>2</button>
                  <button className="circles" onClick={() => handleButtonClick(3)}>3</button>
                  <button className="circles" onClick={() => handleButtonClick(4)}>4</button>
                  <button className="circles" onClick={() => handleButtonClick(5)}>5</button>
                </div>
                <button className="submit" onClick={() => setShowThanks(true)}>Submit</button>
        
        </div>
  
      </div>

    </>
  )
}

export default App
