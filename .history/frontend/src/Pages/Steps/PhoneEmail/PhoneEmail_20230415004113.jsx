import React from 'react'
const phoneEmailMap = {
  phone: Phone,
  email: Email,
}

const PhoneEmail = ({onNext}) => {
  return (
    <>
        <div> Phone or Email Component</div>
        <button onClick={onNext} > Next </button>
    
    </>
  )
}

export default PhoneEmail