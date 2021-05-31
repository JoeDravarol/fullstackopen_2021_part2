import React from 'react'

const Filter = ({ filterBy, handleOnChange }) => {
  return (
    <div>
      find countries <input value={filterBy} onChange={handleOnChange} /> 
    </div>
  )
}

export default Filter
