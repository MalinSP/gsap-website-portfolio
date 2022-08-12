import React, { useContext, useEffect, useLayoutEffect } from "react"
import styled from "styled-components"
import { RecentProjects } from "../components"
import { Link } from "gatsby"
import { formatAMPM } from "../functions/time.js"
import { GatsbyContext } from "../context/context"
import gsap from "gsap"

const Menu = () => {
  const { isMenuOpen, tlShowSidebar, navTopRef, logoRef, setRef, refs } =
    useContext(GatsbyContext)

  useLayoutEffect(() => {
    tlShowSidebar.current = gsap
      .timeline({ paused: true })
      .to(navTopRef.current, {
        backgroundColor: "#1a2323",
        duration: 1,
        ease: "power4.Out",
      })
      .to(logoRef.current, { color: "#f7ede2", duration: 1 }, "<=0.5")
      .to(".hamburger-menu p", { color: "#f7ede2", duration: 1 }, 0)
      .to(
        refs.current,
        {
          x: 0,
          duration: 1.5,
          stagger: {
            amount: 0.4,
          },
          ease: "power2.InOut",
        },
        "<=0.5"
      )
      .to(
        ".top h6 span",
        {
          y: 0,
          ease: "power4.inOut",
          // skewY: 7,
          duration: 1.2,
        },
        "<=0.9"
      )
      .to(
        ".top ul li a span",
        {
          y: 0,
          // autoAlpha: 0,
          ease: "power4.inOut",
          duration: 1.2,
          stagger: {
            amount: 0.4,
          },
        },
        "<"
      )
  }, [])

  useEffect(() => {
    isMenuOpen ? tlShowSidebar.current.play() : tlShowSidebar.current.reverse()
  }, [isMenuOpen])

  return (
    <>
      <Wrapper className="menu">
        {/* <div className="nav-top"></div> */}
        <div className="top" ref={setRef}>
          <div className="wrapper">
            <h6>
              <span>Navigation</span>
            </h6>
            <ul>
              <li>
                <Link to="/">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>Contacts</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <RecentProjects ref={setRef} />
        <div className="bottom" ref={setRef}>
          <div className="wrapper mid-container">
            <div className="socials">
              <h6>Socials</h6>
              <a href="http://">
                {/* <ImLinkedin2 /> */}
                LinkedIn
              </a>
              <a href="http://">GitHub</a>
              <a href="http://">Facebook</a>
            </div>
            <div className="contacts">
              <h6>Contacts</h6>
              <a href="http://">Write me in Facebook</a>
              <a href="http://">Email me</a>
              <a href="http://">sergio.malin@gmail.com</a>
            </div>
            <div className="info">
              <span>
                Version <br /> {new Date().getFullYear()} &copy; Edition
              </span>
              <span>
                Local Time <br />
                {formatAMPM(new Date())} CDT
              </span>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  position: absolute;
  top: 10vh;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  background: #f7ede2;
  /* z-index: 2; */
  display: grid;
  overflow: scroll;
  /* transform: translateX(100%); */
  /* visibility: hidden; */ /* overflow: auto; */
  /* transform: translateX(100%); */ /* visibility: hidden; */
  /* margin-top: 10vh; */
  .nav-top {
    /* background: transparent; */
    /* background-color: #1a2323; */
    padding-top: 3rem;
    padding-bottom: 3rem;
    /* height: 10vh; */
    /* transform: translateX(100%); */
  }
  .top {
    margin-top: 0;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    display: grid;
    align-content: center;
    gap: 1.4rem;
    background-color: #232f2f;
    color: #d0dcdc;
    position: relative;
    z-index: 10;
    transform: translateX(100%);

    h6 {
      font-size: small;
      color: #577575;
      margin-bottom: 1.2rem;
      overflow: hidden;
      position: relative;
      /* height: 25px; */
      /* opacity: 0; */
      span {
        /* transform: translateY(150px);
        position: absolute; */
        transform: translateY(100%);
        display: inline-block;
      }
    }
    ul {
      line-height: normal;
      display: grid;
      gap: 0.5rem;
      li {
        a {
          text-decoration: none;
          font-size: clamp(1rem, 2.5vw, 5rem);
          letter-spacing: -0.05rem;
          font-weight: 200;
          font-family: "Cairo", sans-serif;
          color: #d0dcdc;
          overflow: hidden;
          position: relative;
          display: inline-block;
          span {
            transform: translateY(100%);
            display: inline-block;
            /* position: absolute; */
          }
        }
      }
    }
  }
  .bottom {
    background-color: #1a2323;
    color: #a1baba;
    position: relative;
    bottom: 0;
    z-index: 10;
    left: 0;
    width: 100%;
    transform: translateX(100%);
    /* position: absolute;
    bottom: 0;
    left: 0;
    right: 0; */
    .mid-container {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding-top: 3rem;
      padding-bottom: 3rem;
      color: #577575;
      :last-child {
        align-items: center;
      }

      h6 {
        font-size: small;
        margin-bottom: 1rem;
      }
      .socials {
        display: grid;
        font-size: clamp(0.8rem, 1.5vw, 4rem);
        gap: 0.2rem;

        a {
          color: #d0dcdc;
          /* display: flex;
          align-items: center; */

          svg {
            margin-right: 1rem;
            font-size: 1.2rem;
            /* display: grid; */
          }
        }
      }
      .contacts {
        display: grid;
        gap: 0.2rem;
        font-size: clamp(0.8rem, 1.5vw, 4rem);
        a {
          color: #d0dcdc;
        }
      }
      .info {
        display: grid;
        font-size: small;
        font-size: clamp(0.8rem, 1vw, 3rem);
        span:first-child {
          margin-bottom: 1rem;
        }
      }
    }
  }
`

export default Menu
