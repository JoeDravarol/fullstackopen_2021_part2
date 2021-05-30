import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = { 
      name: newName,
      number: newNumber
    }

    const isDuplicate = persons.find(person => person.name === newName)

    if (isDuplicate) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons( [...persons, newPerson ] )
      setNewName('')
      setNewNumber('')
    }
  }

  const handleOnChange = (callback) => {
    return (event) => {
      callback(event.target.value)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleOnChange(setNewName)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleOnChange(setNewNumber)} />
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

      {persons.map(({ name, number }) => 
        <p key={name}>
          {name} {number}
        </p>
      )}
    </div>
  )
}

export default App
