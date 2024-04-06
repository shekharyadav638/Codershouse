import React from 'react'
const phoneEmailMap = {
  phone: Phone,
  email: Email,
}

const PhoneEmail = ({onNext}) => {
  const [type, setType] = useState('phone');
  const comp = phoneEmailMap[type];

  function onNext(){
    setType(type + 1);  
  }
  return (
         <Step onNext ={onNext}/>
  )  
}

export default PhoneEmail