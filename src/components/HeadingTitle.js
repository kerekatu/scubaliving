import React from 'react'

const HeadingTitle = ({ headingText, headingType }) => {
  const headingOne = <h1 className="heading-1">{headingText}</h1>
  const headingTwo = (
    <h2 className="heading-2 heading-2--section">{headingText}</h2>
  )

  return headingType === 'headingOne' ? headingOne : headingTwo
}

export default HeadingTitle
