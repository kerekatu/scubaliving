import React, { useContext } from 'react'

import { MainContext } from '../../context/MainContext'

import CoursesCard from './CoursesCard'

const CoursesCards = () => {
  const { courses } = useContext(MainContext)
  const coursesList = courses[0].map((course, index) => (
    <CoursesCard course={course} key={index} />
  ))

  return <div className="courses__cards">{coursesList}</div>
}

export default CoursesCards
