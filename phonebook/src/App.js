import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filterName={filterName} 
        handleOnChange={handleOnChange(setFilterName)} 
      />

      <h3>Add a new</h3>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleOnChange(setNewName)}
        handleNumberChange={handleOnChange(setNewNumber)}
        handleSubmit={addPerson}
      />
      
      <h2>Numbers</h2>

      <Persons 
        persons={persons}
        filterName={filterName}
      />
    </div>
  )
}

export default App
