import React, { useState, useRef, useCallback } from "react"
import gsap from "gsap"

function useArrayRef() {
  const refs = useRef([])
  refs.current = []
  return [refs, ref => ref && refs.current.push(ref)]
}

const GatsbyContext = React.createContext()

const GatsbyProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [refs, setRef] = useArrayRef()

  const wordRef = useRef()
  const tlShowSidebar = useRef()
  const navTopRef = useRef()
  const logoRef = useRef()

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
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
