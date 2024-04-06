import React,{useState} from 'react'
import styles from './Login.module.css'

const steps={
    1: PhoneEmail,
    2: Otp,
};

const Login = () => {

  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext(){
    setStep(step + 1);  
  }


  return (
    <div>
         <Step onNext ={onNext}/>
    </div>
  )
}

export default Login