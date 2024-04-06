import React from 'react'
import Card from '../../../../Components/Shared/Card/Card';
import Button from '../../../../Components/Shared/Button/Button'

const Phone = () => {
  return (
    <Card title="Enter Your Email" icon = "email-emoji">
        <TextInput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
        <div>
          <Button  text = "Next"/>
        </div>
        <div>
            
        </div>
      </Card>
  )
}

export default Phone