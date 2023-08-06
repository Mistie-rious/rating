import React from 'react'
import './App.css'
import illustration from './assets/images/illustration.svg'
import App from './App'


function Thanks(props) {
  return (
    <div className='body'>
        <div className="containerthanks">
        <img style={{width:91, height:64}} src={illustration} alt=''></img>
            <div className="circlelong">
            You selected {props.score} out of 5
            </div>
            
          
            <h1 className="heading">How did we do?</h1>
              <div className="smalltext">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering.</div>

        
        </div>
      </div>
  )
}

export default Thanks