import React, { useState } from 'react'
import styles from './Register.module.css'
import PhoneEmail from '../Steps/PhoneEmail/PhoneEmail';
import Otp from '../Steps/Otp/Otp';
import Name from '../Steps/Name/Name';
import Avatar from '../Steps/Avatar/Avatar';
import Username from '../Steps/Username/Username';

const steps={
    1: PhoneEmail,
    2: Otp,
    3: Name, 
    4: Avatar,
    5: Username,
};

const Register = () => {

  const [step, setStep] = useState(1);
  const Step = steps[step]

  return (
    <div>
        <Step onNext = ""/>
    </div>
  )
}

export default Register