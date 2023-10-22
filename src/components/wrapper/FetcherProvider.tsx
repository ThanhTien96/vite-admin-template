/***
 * PLACE FETCH API 
 * ****/

import React from 'react'

type FetcherProviderProps = {
    children: React.ReactNode;
}

const FetcherProvider = ({children}: FetcherProviderProps) => {
  return (
    <>
        {children}
    </>
  )
}

export default FetcherProvider