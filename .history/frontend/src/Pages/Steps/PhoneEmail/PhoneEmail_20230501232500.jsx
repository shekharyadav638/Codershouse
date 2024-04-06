import React from 'react'

const phoneEmailMap = {
  phone: Phone,
  email : Email,
}

const PhoneEmail = ({onNext}) => {
  return (
    <>
      <div>PhoneEmail</div>
      <button onClick={onNext}>Next</button>
    </>   
  )
}

export default PhoneEmail 