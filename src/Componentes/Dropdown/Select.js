import React from 'react'
import './select.css'

const Select = ({label, itens, required, valueAtt, value}) => {
  function attValue (e) {
    valueAtt(e.target.value)
  }


  return (
    <div className='select'>
        <label>{label}</label>
        <select required={required} onChange={attValue} value={value}>
            {itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
  )
}

export default Select
