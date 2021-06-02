import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [message, setMessage] = useState({ content: null, status: 'pending' })

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const updateNotification = (message, status = 'success') => {
    const initialMessage = { content: null, status: 'pending' }
    const newMessage = {
      content: message,
      status
    }

    setMessage(newMessage)
    setTimeout(() => {
      setMessage(initialMessage)
    }, 3000)
  }

  const addPerson = () => {
    const newPerson = { 
      name: newName,
      number: newNumber
    }

    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons( [...persons, returnedPerson ] )
        updateNotification(`Added ${returnedPerson.name} to the phonebook`)
      })
  }

  const removePerson = (name, id) => {
    const isConfirm = window.confirm(`Delete ${name}?`)

    if (!isConfirm) return null

    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id))
        updateNotification(`${name} is succesfully removed from server`)
      })
      .catch(() => {
        setPersons(persons.filter(p => p.id !== id))
        updateNotification(
          `Information of ${name} has already been removed from server`,
          'error'
        )
      })
  }

  const updatePerson = () => {
    const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)

    if (!confirmUpdate) return null
  
    const person = persons.find(person => person.name === newName)
    const changedPerson = {
      ...person,
      number: newNumber
    }

    personService
      .update(person.id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
        updateNotification(`Updated ${returnedPerson.name}'s number`)
      })
      .catch(() => {
        setPersons(persons.filter(p => p.id !== person.id))
        updateNotification(
          `Information of ${person.name} has already been removed from server`,
          'error'
        )
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const isDuplicate = persons.find(person => person.name === newName)

    if (isDuplicate) {
      updatePerson()
    } else {
      addPerson()
    }

    setNewName('')
    setNewNumber('')
  }

  const handleOnChange = (callback) => {
    return (event) => {
      callback(event.target.value)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
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
        handleSubmit={handleSubmit}
      />
      
      <h2>Numbers</h2>

      <Persons 
        persons={persons}
        filterName={filterName}
        removePerson={removePerson}
      />
    </div>
  )
}

export default App
