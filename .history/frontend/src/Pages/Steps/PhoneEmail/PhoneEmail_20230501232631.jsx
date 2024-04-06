import React , {useState} from 'react'

const phoneEmailMap = {
  phone: Phone,
  email : Email,
}

const PhoneEmail = ({onNext}) => {
  const [type, setType] = useState('phone');
  const component = phoneEmailMap[type];

  function onNext(){
    setStep(step + 1);  
  }
  

  return ( 
         <Step onNext ={onNext}/>
  )
}

export default PhoneEmail 