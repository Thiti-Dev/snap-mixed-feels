import React, { Component } from 'react'

const GlobalContext = React.createContext({})

interface IGlobalProps{
    children: React.ReactNode
}

export function GlobalProvider({children}: IGlobalProps){
    const [settings,setSetting] = React.useState({lang:'th'})
    return (
        <GlobalContext.Provider value={{ settings }} >
        {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext