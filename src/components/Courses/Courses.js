import React from 'react'
import { Link } from 'react-router-dom'

import HeadingTitle from '../HeadingTitle'
import CoursesCards from './CoursesCards'

const Courses = () => {
  return (
    <section className="courses">
      <HeadingTitle
        headingText="PADI - Dykkercertifikater"
        headingType="headingTwo"
      />
      <CoursesCards />
      <Link to="/courses" className="link">
        <HeadingTitle
          headingText="Se alle kurser og certifikater her!"
          headingType="headingOne"
        />
      </Link>
    </section>
  )
}

export default Courses
