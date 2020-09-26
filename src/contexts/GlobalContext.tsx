import React, { Component } from 'react'

interface StoreProperties{
    quote_data?: {text:string,background_url:string};
    is_loading: boolean;
}

type ContextProps = { 
    settings: Object,
    store: StoreProperties,
    setStore: (key:string,valuu:number|boolean|Object|any[])=> void
  };
  

const GlobalContext = React.createContext<Partial<ContextProps>>({})

interface IGlobalProps{
    children: React.ReactNode
}

export function GlobalProvider({children}: IGlobalProps){
    const [settings,setSetting] = React.useState({lang:'th',debug:true})
    const [globalStore,setGlobalStore] = React.useState({
        is_loading:false
    })

    // Scoped
    function debugTrace(logStr:string):void{
        if(settings.debug) console.log(logStr)
    }
    // ────────────────────────────────────────────────────────────────────────────────


    // setting hook wrapped
    function setGlobalData(_key:string,_value: number | boolean | Object | any[]):void{
        setGlobalStore((prevData) => {
            return {
                ...prevData,
                [_key]: _value
            }
        })
        debugTrace(`[store]: ${_key} has been updated`);
    }
    // ────────────────────────────────────────────────────────────────────────────────

    //@desc below
    // Available context obj
    // -settings
    // -store,setStore

    return (
        <GlobalContext.Provider value={{ settings,store:globalStore,setStore:setGlobalData }} >
        {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext