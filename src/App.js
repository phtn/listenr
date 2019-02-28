import React, { useState, useEffect } from 'react';
import Mic from './assets/microphone.svg'

const arr = []









export default function App(){

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();




  const handleTalkClick = () => {
    // console.log(recognition)
    // recognition.onend()
    recognition.continous = true
    recognition.start()
  }

  const [ items, setItems ] = useState([])

  useEffect( ()=> {
    // console.log(arr)

    const handleItems = (props) => setItems(props)
    
    console.log(items)
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 2;
    recognition.start();
  
    recognition.onresult = function(event) {
      // console.log('You said: ', event.results[0][0].transcript);
      arr.push(event.results[0][0].transcript)
      handleItems(...arr)
      
      
    console.log(arr)
    handleItems(arr)
    };
    // recognition.continuous = true   
  })








  return (
    <div style={{display: 'flex', justifyContent: 'center', height: '80vh', overflow: 'auto', backgroundColor: '#f4f7f8'}}>

      <div style={{border: '0px solid red', position: 'absolute', top: '80vh', display: 'flex', width: '100%', justifyContent: 'center'}}>
        <button style={{ backgroundColor: '#222', border: 'none', borderRadius: '100px', padding: 35}} onClick={()=> handleTalkClick()}>
          <img src={Mic} height={55} alt='mic'/>
        </button>
      </div>
      {/* <hr/> */}

      <div style={{display: 'block'}}>
        { items && items.length !== 0 ? arr.slice(0).reverse().map( (props, index) => {
          console.log(typeof props)
          return (
            <div key={index} style={{border: '0px solid tomato'}}>
              {/* {} */}
              {/* {typeof items} */}
              <div style={{width: 300, boxShadow: "0 2px 4px 0 rgba(14,30,37,.12)", padding: 10, border: '0px solid green', borderRadius: 2, backgroundColor: '#eee', margin: 10, display: 'block'}}>
                {props}
              </div>
            </div>
          )
        }): null }

            <div style={{border: '0px solid tomato'}}>
              {/* {} */}
              {/* {typeof items} */}
              <div style={{width: 300, boxShadow: "0 2px 4px 0 rgba(14,30,37,.12)", padding: 10, border: '0px solid green', borderRadius: 2, backgroundColor: '#eee', margin: 10, display: 'block'}}>
                Tesla
              </div>
            </div>


      </div>
      


    </div>
  )
}
