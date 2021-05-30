import React from 'react'

const Header = ({ name }) => {
  return <h2>{name}</h2>
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

const TotalExercise = ({ parts }) => {
  const total = parts.reduce((sum, currentPart) => sum + currentPart.exercises, 0)

  return (
    <p><b>total of {total} exercises</b></p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <TotalExercise parts={course.parts} />
    </div>
  )
}

export default Course