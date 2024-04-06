import React from 'react'
const phoneEmailMap = {
  phone: Phone,
  email: Email,
}

const PhoneEmail = ({onNext}) => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext(){
    setStep(step + 1);  
  }
  return (
         <Step onNext ={onNext}/>
  )  
}

export default PhoneEmail