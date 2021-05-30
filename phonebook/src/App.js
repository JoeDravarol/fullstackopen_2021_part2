import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = { name: newName }

    const isDuplicate = persons.find(person => person.name === newName)

    if (isDuplicate) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons( [...persons, newPerson ] )
      setNewName('')
    }
  }

  const handleOnChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleOnChange} />
        </div>
        <div>
          <button 
            type="submit"
            onClick={addPerson}
          >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map(({ name }) => 
        <p key={name}>{name}</p>
      )}
    </div>
  )
}

export default App
