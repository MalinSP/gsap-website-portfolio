import React, { useState, useRef } from "react"

export function useArrayRef() {
  const refs = useRef([])
  refs.current = []
  return [refs, ref => ref && refs.current.push(ref)]
}

const GatsbyContext = React.createContext()

const GatsbyProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [refs, setRef] = useArrayRef()

  const tlEnter = useRef()
  const wordRef = useRef()
  const tlShowSidebar = useRef()
  const navTopRef = useRef()
  const logoRef = useRef()

  const hamburgerMenuRef = useRef()
  const topMenuRef = useRef()
  const bottomMenuRef = useRef()

  const showSidebar = e => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <GatsbyContext.Provider
      value={{
        isMenuOpen,
        wordRef,
        navTopRef,
        tlShowSidebar,
        logoRef,
        setIsMenuOpen,
        showSidebar,
        refs,
        setRef,
        tlEnter,
        topMenuRef,
        bottomMenuRef,
        hamburgerMenuRef,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
