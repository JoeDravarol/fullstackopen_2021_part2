import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

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

  const filteredPersons = persons.filter(person => {
    const nameLower = person.name.toLowerCase()
    const filterLower = filterName.toLowerCase()

    return nameLower.includes(filterLower)
  })
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filterName} onChange={handleOnChange(setFilterName)} />
      </div>

      <h2>Add a new</h2>
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

      {filteredPersons.map(({ name, number }) => 
        <p key={name}>
          {name} {number}
        </p>
      )}
    </div>
  )
}

export default App
