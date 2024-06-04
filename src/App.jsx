import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  //state to hold values from input field
  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [bmi,setbmi] = useState(null)
  const [heading, setHeading] = useState(null);
  const [heading1, setHeading1] = useState('Your');
  const [heading2, setHeading2] = useState('BMI');
  const [heading3, setHeading3] = useState('Result');


  //conditional rendering
  const [isWeight,setisWeight] = useState(true)
  const [isHeight,setisHeight] = useState(true)

  const Validate = (e)=>{
   //console.log(e.target.value); 
   //console.log(e.target.name); 

   let value=e.target.value
   let name=e.target.name
   console.log(!!value.match(/^[0-9]*$/));
    
   if(!!value.match(/^[0-9]*$/)){
    if(name=="weight"){
      setWeight(value)
      setisWeight(true)
     }
     else{
      setHeight(value)
      setisHeight(true)
     }
   }
   else{
    if(name=="weight"){
      setWeight(value)
      setisWeight(false)
   }
   else{
      setHeight(value)
      setisHeight(false)
   }
  }
   
  }

  const handleReset =()=>{
    setWeight(0)
    setHeight(0)
    setbmi(null)
    setisWeight(true)
    setisHeight(true)
    setHeading(null)
    setHeading1('Your')
    setHeading2('BMI')
    setHeading3('Result')
    
  }
  const calculateBmi = () => {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setbmi(bmiValue);
      setHeading('Your result')
      setHeading1('BMI')
      setHeading2(bmiValue)

      if (bmiValue < 18.5) {
        setHeading3('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setHeading3('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setHeading3('Overweight');
      } else if (bmiValue >= 30) {
        setHeading3('Obesity');
      }
   }
 
  // const calculateBmi =()=>{
  //   const heightInMeters = height / 100;
  //   setbmi(weight / (heightInMeters * heightInMeters)).toFixed(2);
  // }
 console.log('weight:',weight);
 console.log('height:',height);

  return (
    <>
    <div className='d-flex justify-content-center align-items-center ' style={{width:'100%',height:'100vh'}}>
        <div className='bg-light p-3 rounded d-flex justify-content-center align-items-center flex-column bg-dark border border-primary ' style={{width:'450p'}}>
          <h1 className='text-center text-light mt-2'>BMI Calculator</h1>
          <div className='mt-2 rounded shadow  text-light p-3' style={{width:'380px',backgroundColor:'rgb(50,100,225)'}}>
            <p className='text-center' style={{fontSize:'17px'}}><FontAwesomeIcon icon={faQuoteLeft} /> Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.  <FontAwesomeIcon icon={faQuoteRight} /></p>
          </div>
        
          <h5 className='text-center text-light mt-3'>{heading}</h5>
          <div className='rslt mt-3 border border-primary' style={{width:'190px',height:'190px', borderRadius:'50%',background: 'radial-gradient(circle, white 0%,rgb(60,100,225) 100%)'}}>
            <p className='text-center mt-4 fs-5 fw-bold'>{heading1}</p>
            <h5 className='text-center mt-4 fs-5 fw-bold'>{heading2}</h5>
            <p className='text-center mt-4 fs-5 fw-bold '>{heading3}</p>
          </div>
          font-family:'"Roboto", sans-serif'
          <form className='mt-2'>
             <div className="mt-3">
             <label className='text-light mt-3 me-2'>Enter your Weight:</label>
             <TextField id="outlined-basic" value={weight || ""} name='weight' label=" in kg" variant="outlined"  onChange={(e)=>Validate(e)}
             sx={{
             '& .MuiInputBase-input': {
              color: 'white', // White text
              },
              '& .MuiInputLabel-root': {
              color: 'white', // White label text
              },
              '& .MuiOutlinedInput-root': {
              '& fieldset': {
              borderColor: 'white', // White border
              },
              '&:hover fieldset': {
              borderColor: 'blue', // White border on hover
              },
              '&.Mui-focused fieldset': {
              borderColor: 'darkblue', // White border when focused
              },
             },
            }}
           />
           {!isWeight &&<p className='text-danger'>*invalid input</p>}
            </div>
            <div className="mt-3">
            <label className='text-light mt-3 me-2'>Enter your Height:</label>
            <TextField id="outlined-basic" value={height || ""} name='height' label=" in cm" variant="outlined"  onChange={(e)=>Validate(e)}
            sx={{
            '& .MuiInputBase-input': {
            color: 'white', // White text
            },
            '& .MuiInputLabel-root': {
            color: 'white', // White label text
            },
            '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white', // White border
            },
            '&:hover fieldset': {
              borderColor: 'blue', // White border on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'darkblue', // White border when focused
            },
           },
           }}
           />
           {!isHeight &&<p className='text-danger'>*invalid input</p>}
            </div>
            <div className="mt-4 mb-3 d-flex justify-content-between">
            <Button variant="contained"  color="primary" style={{width:'160px',height:'40px',color:'white'}} onClick={calculateBmi} disabled={isWeight&&isHeight?false:true} >Calculate</Button>
            <Button  variant="outlined" style={{width:'160px',height:'40px'}} onClick={handleReset} >Reset</Button>
            </div>
          </form>
        </div>
     </div>
    
    </>
  )
}

export default App
