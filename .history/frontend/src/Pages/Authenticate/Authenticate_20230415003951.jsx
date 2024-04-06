import React,{useState} from 'react'
import PhoneEmail from '../Steps/PhoneEmail/PhoneEmail';
import Otp from '../Steps/Otp/Otp';

const steps={
    1: PhoneEmail,
    2: Otp
};

const Authenticate = () => {

  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext(){
    setStep(step + 1);  
  }
  

  return (
         <Step onNext ={onNext}/>
  )
}
 
export default Authenticate