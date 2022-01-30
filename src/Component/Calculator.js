import React,{useState} from 'react';
import "./Calculator.css";
 function Calculator() {
     const [result,setResult] = useState('')

     const ClickHandler=(event)=>{
         setResult(result.concat(event.target.value));
     }
     const ClearDisplay=(event)=>{
         setResult('');
     } 
     const calculate=(event)=>{
         setResult(eval(result).toString());
     }
     
  return(
      <div className='calc'>
          <input type='text' placeholder='0' id='answer'value={result}/>
          <br/>
          <input type='button' value='9'className='button'onClick={ClickHandler}/>
          <input type='button' value='8'className='button'onClick={ClickHandler}/>
          <input type='button' value='7'className='button'onClick={ClickHandler}/>
          <br/>
          <input type='button' value='6'className='button'onClick={ClickHandler}/>
          <input type='button' value='5'className='button'onClick={ClickHandler}/>
          <input type='button' value='4'className='button'onClick={ClickHandler}/>
          <br/>
          <input type='button' value='3'className='button'onClick={ClickHandler}/>
          <input type='button' value='2'className='button'onClick={ClickHandler}/>
          <input type='button' value='1'className='button'onClick={ClickHandler}/>
          <br/>
          <input type='button' value='0'className='button'onClick={ClickHandler}/>
          <input type='button' value='-'className='button'onClick={ClickHandler}/>
          <input type='button' value='+'className='button'onClick={ClickHandler}/>
          <br/>
          <input type='button' value='*'className='button'onClick={ClickHandler}/>
          <input type='button' value='clear'className='button'onClick={ClearDisplay}/>
          <input type='button' value='='className='button'onClick={calculate}/>
    
      
      </div>
  );
}
export default Calculator;

