import React from 'react'

const Header = ({ name }) => {
  return <h1>{name}</h1>
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => 
        <Part key={part.id} title={part.name} exercises={part.exercises} />
      )}
    </>
  )
}

const Part = ({ title, exercises }) => {
  return <p>{title} {exercises}</p>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default Course