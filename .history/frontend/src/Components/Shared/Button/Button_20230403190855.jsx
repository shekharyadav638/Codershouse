import React from 'react'
import styles from './Button.module.css'

const Button = ({text}) => {
  return (
    <button>
        <span> {text}</span>
        <img src="/images/arrow-forward.png"></img>
    </button>
  )
}

export default Button