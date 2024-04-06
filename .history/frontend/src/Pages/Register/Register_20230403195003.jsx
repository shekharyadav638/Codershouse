import React, { useState } from 'react'
import styles from './Register.module.css'
import PhoneEmail from '../Steps/PhoneEmail'
import Otp from '../Steps/Otp'
import Name from '../Steps/Name'
import Avatar from '../Steps/Avatar'
import Username from '../Steps/Username'

const steps={
    1: PhoneEmail,
    2: StepOtp,
    3: StepName, 
    4: StepAvatar,
    5: StepUsername,
};

const Register = () => {

  const [step, setStep] = useState(1);
  const Step = steps[step]
  return (
    <div>
        

    </div>
  )
}

export default Register