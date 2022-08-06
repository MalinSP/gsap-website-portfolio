import React, { useLayoutEffect, useRef, useCallback } from "react"
import styled from "styled-components"
import Logo from "../assets/logo.svg"
import gsap from "gsap"

const Header = () => {
  const hamburgerMenuRef = useRef()
  const wordRef = useRef()
  const tlEnter = useRef()

  const handleMouseEnter = useCallback(() => {
    tlEnter.current.play()
  }, [])

  const handleMouseLeave = useCallback(() => {
    tlEnter.current.reverse()
  }, [])

  useLayoutEffect(() => {
    tlEnter.current = gsap
      .timeline({ paused: true })
      .to(wordRef.current, {
        autoAlpha: 1,
        y: "-50%",
        duration: 0.7,
        stagger: 0.5,
        ease: "expo.InOut",
        delay: 0.15,
        scale: 1,
      })
      .to(
        hamburgerMenuRef.current,
        {
          autoAlpha: 0,
          y: -10,
          stagger: 0.2,
          duration: 1,
          ease: "expo.InOut",
          scale: 0.5,
        },
        0
      )
  }, [handleMouseEnter, handleMouseLeave])

  return (
    <Wrapper className="wrapper">
      <div className="logo-container">
        <a href="/">
          <Logo className="logo-icon" />
        </a>
      </div>
      <div
        className="hamburger-menu"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-hidden="true"
      >
        <div ref={hamburgerMenuRef}>
          <span></span>
          <span></span>
        </div>
        <p ref={wordRef}>MENU</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding-top: 1.4rem; */
  height: 10vh;
  z-index: 2;

  .logo-container {
    .logo-icon {
      color: #455e58;
      display: grid;
    }
  }
  .hamburger-menu {
    width: 45px;
    height: 2rem;
    overflow: hidden;
    cursor: pointer;
    /* will-change: transform; */
    position: relative;
    display: grid;
    align-content: center;
    justify-content: center;
    span {
      height: 2px;
      width: 35px;
      background: #301f0d;
      display: block;
      margin-bottom: 0.3rem;
    }
    p {
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(-50%, 50%);
      visibility: hidden;
      letter-spacing: 0.1rem;
      font-size: 0.8rem;
      font-weight: 600;
      margin-bottom: 0;
      color: #301f0d;
      transform: scale(0.5);
    }
  }
`
export default Header
