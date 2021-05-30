import React from 'react'

const Persons = ({ persons, filterName }) => {
  const filteredPersons = persons.filter(person => {
    const nameLower = person.name.toLowerCase()
    const filterLower = filterName.toLowerCase()

    return nameLower.includes(filterLower)
  })
  
  return (
    <div>
      {filteredPersons.map(({ name, number }) => 
        <p key={name}>
          {name} {number}
        </p>
      )}
    </div>
  )
}

export default Persons
