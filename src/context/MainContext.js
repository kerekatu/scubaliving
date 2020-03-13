import React, { createContext, useState } from 'react'

import productImgOne from '../../public/images/fine.jpg'
import productImgTwo from '../../public/images/hanske.jpg'
import productImgThree from '../../public/images/ur.jpg'

import tripImgOne from '../../public/images/malta.jpg'
import tripImgTwo from '../../public/images/norge.jpg'

import courseImgOne from '../../public/images/padi.png'

export const MainContext = createContext()

const MainContextProvider = ({ children }) => {
  const products = useState([
    {
      productId: 1,
      productImg: productImgThree,
      productTitle: 'Ur',
      productPrice: 'KR. 899,-'
    },
    {
      productId: 2,
      productImg: productImgOne,
      productTitle: 'Rejsefinne',
      productPrice: 'KR. 999,-'
    },
    {
      productId: 3,
      productImg: productImgOne,
      productTitle: 'Rejsefinne',
      productPrice: 'KR. 999,-'
    },
    {
      productId: 4,
      productImg: productImgTwo,
      productTitle: 'Coldwater Gloves',
      productPrice: 'KR. 1499,-'
    }
  ])

  const trips = useState([
    {
      tripId: 1,
      tripImg: tripImgOne,
      tripTitle: 'Malta',
      tripDescription:
        'Oplev skønne Malta og det helt fantasike dyreliv og sammehold. Vi arrangerer dykkerejser til Malta hele året rundt.'
    },
    {
      tripId: 2,
      tripImg: tripImgTwo,
      tripTitle: 'Norge',
      tripDescription:
        'Nordeuropas bedste dykkerspots ligger i Norge. Vi har 25 års erfaring med dyk i Norge. Oplev det klarest vand i verden!'
    }
  ])

  const courses = useState([
    {
      courseId: 1,
      courseTitle: 'Tag et internationalt anerkendt dykkercertifikat',
      courseDescription:
        'Her finder du et stort udvalg af dykkerkurser lige fra begynder til professionel. Vi er et af Danmarks førende dykkercentre, som uddaner fra PADI organisationen. Når du vælger at tage et dykkercertifikat hos os, får du ikke kun et internationalt anerkendt dykkercertifikat til merkeds bedste priser, du får også et dykkerkursus, hvor kvaliteten er i top. Vi har kompetente instruktører på vores dykkerkurser. Erfaring, tillid og sikkerhed er vigtigt, når du dykker med os, derfor står vi klar med et stort hold af kompetente instruktører.',
      courseImg: courseImgOne
    }
  ])

  return (
    <MainContext.Provider value={{ products, trips, courses }}>
      {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider
