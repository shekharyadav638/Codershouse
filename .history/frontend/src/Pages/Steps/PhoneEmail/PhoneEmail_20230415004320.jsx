import React from 'react'
const phoneEmailMap = {
  phone: Phone,
  email: Email,
}

const PhoneEmail = ({onNext}) => {
  const [type, setType] = useState('phone');
  const type = steps[step];

  function onNext(){
    setStep(step + 1);  
  }
  return (
         <Step onNext ={onNext}/>
  )  
}

export default PhoneEmail