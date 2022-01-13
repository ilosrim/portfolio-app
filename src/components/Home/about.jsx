import React, { useState, useEffect } from 'react'
import db from '../firebase/config'

const HomeAbout = () => {

  const [portfolios, setPortfolios] = useState([])

  useEffect(() => {
    db.collection("portfolio").onSnapshot((snapshot) =>
      setPortfolios(snapshot.docs.map((doc) => doc.data()))
    )
  }, [])
  return (
    <div className='about'>
      {
        portfolios.map(portfolio => (
          <>
            <h1>{portfolio.title}</h1>
          </>
        ))
      }
    </div>
  )
}

export default HomeAbout
