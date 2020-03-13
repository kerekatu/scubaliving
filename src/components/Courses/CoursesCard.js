import React from 'react'
import { Link } from 'react-router-dom'

const CoursesCard = ({ course }) => (
  <Link
    to={`/courses/${course.courseId}`}
    title={`Gå til Kursus "${course.courseTitle.substring(0, 20)}"...`}
    className="courses__card"
  >
    <div className="courses__text">
      <h3 className="heading-2 regular">{course.courseTitle}</h3>
      <span className="paragraph">{course.courseDescription}</span>
    </div>
    {course.courseImg === '' ? null : (
      <img
        src={course.courseImg}
        alt={`Course ${course.courseId}`}
        className="courses__img"
      />
    )}
  </Link>
)
export default CoursesCard
