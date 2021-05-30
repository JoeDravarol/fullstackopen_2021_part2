import React from 'react'

const Filter = ({ filterName, handleOnChange }) => {
  return (
    <div>
        filter shown with <input value={filterName} onChange={handleOnChange} />
    </div>
  )
}

export default Filter
