import React , {useState} from 'react';
import Phone from './Phone/Phone';
import Email from './Email/Email';

const phoneEmailMap = {
  phone: Phone,
  email : Email,
};

const PhoneEmail = ({onNext}) => {
  const [type, setType] = useState('phone');
  const Component = phoneEmailMap[type];

  function onNext(){
   
  }
  

  return ( 
    <>
      <button >Phone</button>
      <button >Email</button>
      <Component onNext ={onNext}/>
    </>
  )
}

export default PhoneEmail 