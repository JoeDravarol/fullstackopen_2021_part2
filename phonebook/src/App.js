import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons( [...persons, returnedPerson ] )
        })
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
