import React, { useLayoutEffect, useContext, useRef, useCallback } from "react"
import styled from "styled-components"
import Logo from "../assets/logo.svg"

import { GatsbyContext } from "../context/context"
import { hoverAnimation } from "../functions/time"

const Header = () => {
  const {
    showSidebar,
    topMenuRef,
    bottomMenuRef,
    wordRef,
    navTopRef,
    logoRef,
  } = useContext(GatsbyContext)

  const hamburgerMenuRef = useRef()
  const tlEnter = useRef()

  useLayoutEffect(() => {
    hoverAnimation(tlEnter, hamburgerMenuRef, wordRef)
  })
  const handleMouseEnter = useCallback(() => {
    tlEnter.current.play()
  }, [])

  const handleMouseLeave = useCallback(() => {
    tlEnter.current.reverse()
  }, [])

  return (
    <Wrapper className="nav-top" ref={navTopRef}>
      <div className="wrapper nav-center">
        <div className="logo-container">
          <a href="/" ref={logoRef}>
            <Logo className="logo-icon" />
          </a>
        </div>
        <div
          className="hamburger-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => handleMouseLeave()}
          aria-hidden="true"
          onClick={showSidebar}
          data-label="CLOSE"
        >
          <div ref={hamburgerMenuRef} className="menu-icon">
            <span ref={topMenuRef}></span>
            <span ref={bottomMenuRef}></span>
          </div>
          <p ref={wordRef} data-label="Close">
            MENU
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
  /* padding-top: 1.4rem; */
  height: 10vh;
  z-index: 2;
  position: relative;
  :after {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    content: "";
    transform: translateY(90%);
  }

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo-container {
      /* mix-blend-mode: difference; */
      /* color: #455e58; */
      z-index: 10;
      .logo-icon {
        mix-blend-mode: difference;
        color: #455e58;
        display: grid;
        /* mix-blend-mode: color; */
        /* mix-blend-mode: difference; */
      }
    }
    .hamburger-menu {
      width: 55px;
      height: 2rem;
      overflow: hidden;
      cursor: pointer;
      will-change: transform;
      position: relative;
      display: grid;
      align-content: center;
      justify-content: center;
      z-index: 10;
      color: #455e58;

      span {
        height: 2px;
        width: 35px;
        background: #301f0d;
        display: block;
        margin-bottom: 0.3rem;
        /* z-index: 10; */
        will-change: transform;
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
        will-change: transform;
      }
    }
  }
`
export default Header
