import React from 'react'
import './input.css'

const Input = (props) => {

  function attValue (e) {
    props.valueAtt(e.target.value)
  }

  return (
    <div className='input'>
        <label id='nome'>{props.label}</label>
        <input value={props.value} onChange={attValue} required={props.required} placeholder={props.placeholder}/>   
    </div>
  )
}

export default Input
