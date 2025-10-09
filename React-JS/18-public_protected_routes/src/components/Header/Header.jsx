import React from 'react'

const Header = ({title}) => {
  return (
    <h1>{title.at(0).toUpperCase() + title.slice(1)}</h1>
  )
}

export default Header