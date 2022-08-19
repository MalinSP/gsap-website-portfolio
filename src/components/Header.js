import React, {
  useLayoutEffect,
  useContext,
  useRef,
  useCallback,
  useEffect,
} from "react"
import styled from "styled-components"
import Logo from "../assets/logo.svg"
import gsap from "gsap"
import { GatsbyContext } from "../context/context"
import { hoverAnimation } from "../functions/functions"
import { Menu } from "../components"

const Header = () => {
  const {
    showSidebar,
    wordRef,
    navTopRef,
    logoRef,
    tlEnter,
    isMenuOpen,
    topMenuRef,
    bottomMenuRef,
    hamburgerMenuRef,
  } = useContext(GatsbyContext)

  useLayoutEffect(() => {
    hoverAnimation(tlEnter, hamburgerMenuRef, wordRef)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleMouseEnter = useCallback(() => {
    tlEnter.current.play()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMouseLeave = useCallback(() => {
    tlEnter.current.reverse()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const closeTL = useRef()
  useEffect(() => {
    closeTL.current = gsap
      .timeline({
        defaults: {
          duration: 2,
          ease: "power2.out",
          // backgroundColor: "#f7ede2",
        },
      })
      .fromTo(
        topMenuRef.current,
        { y: 0 },
        { y: 4.5, backgroundColor: "#f7ede2" }
      )
      .fromTo(
        bottomMenuRef.current,
        { x: 0 },
        { y: -4.5, backgroundColor: "#f7ede2" },
        0
      )
      .fromTo(topMenuRef.current, { rotation: 0 }, { rotation: 135 }, 0)
      .fromTo(bottomMenuRef.current, { rotation: 0 }, { rotation: 45 }, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    closeTL.current.reversed(!isMenuOpen)
  }, [isMenuOpen])

  return (
    <>
      <Wrapper className="nav-top">
        <div className="overlay" ref={navTopRef}></div>
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
    </>
  )
}

const Wrapper = styled.nav`
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
  /* padding-top: 1.4rem; */
  height: 90px;
  z-index: 2;
  position: relative;
  overflow: hidden;
  .overlay {
    position: absolute;
    background-color: #1a2323;
    width: 100%;
    height: 100%;
    transform: translateY(-200px);
    content: "";
  }

  /* position: relative; */
  /* :after {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--black);
    content: "";
    transform: translateY(90%);
  } */

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
      width: 45px;
      overflow: hidden;
      cursor: pointer;
      will-change: transform;
      position: relative;
      display: block;
      display: grid;
      place-items: center;
      /* display: grid;
      align-content: center;
      justify-content: center; */
      z-index: 10;
      color: #455e58;
      /* position: relative; */
      .menu-icon {
        /* width: 40px;
        height: 40px; */
      }
      span {
        height: 2px;
        width: 30px;
        /* margin: 6px; */
        background: #301f0d;
        display: block;
        /* margin-bottom: 0.3rem; */
        /* z-index: 10; */
        will-change: transform;
        /* transform-origin: 50% 50%; */
        :nth-child(1) {
          margin-bottom: 6px;
        }
      }
      p {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* padding-right: */
        /* top: 50%;
        left: 0%; */
        transform: translate(-50%, 50%);
        visibility: hidden;
        letter-spacing: 0.1rem;
        font-size: 0.675rem;
        font-weight: 600;
        margin-bottom: 0;
        color: #301f0d;
        transform: scale(0.5);
        will-change: transform;
        display: block;
      }
    }
  }
`
export default Header
