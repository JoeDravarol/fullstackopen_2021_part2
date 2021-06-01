import React from 'react'

const Persons = ({ persons, filterName, removePerson }) => {
  const filteredPersons = persons.filter(person => {
    const nameLower = person.name.toLowerCase()
    const filterLower = filterName.toLowerCase()

    return nameLower.includes(filterLower)
  })
  
  return (
    <div>
      {filteredPersons.map(({ id, name, number}) => 
        <p key={name}>
          {name} {number}
          <button onClick={() => removePerson(name, id)}>delete</button>
        </p>
      )}
    </div>
  )
}

export default Persons
