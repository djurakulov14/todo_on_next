import React, { useState } from 'react'
import Header from '../Components/Header'
import searchContext from '../Contexts/serachContext'

const Layout = ({children}) => {

  const [query, setQuery] = useState('')

  return (
    <searchContext.Provider value={{searchText: query, changeSearchText: setQuery }}>
            <Header/>
            {children}
    </searchContext.Provider>
  )
}

export default Layout