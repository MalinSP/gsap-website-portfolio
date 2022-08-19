import React, { useContext, useEffect, useLayoutEffect, useRef } from "react"
import styled from "styled-components"
import { RecentProjects } from "../components"
import { Link } from "gatsby"
import { formatAMPM } from "../functions/functions.js"
import { GatsbyContext, useArrayRef } from "../context/context"
import gsap from "gsap"

const Menu = () => {
  const { isMenuOpen, tlShowSidebar, navTopRef, setRef, refs, wordRef } =
    useContext(GatsbyContext)
  const [titlesRef, setTitlesRef] = useArrayRef()
  const [navLinksRef, setNavLinksRef] = useArrayRef()

  const recentRef = useRef()

  useLayoutEffect(() => {
    const getAllProjects = gsap.utils.toArray(".bg")
    const getAllImages = gsap.utils.toArray(".project-img")
    const getAllArrows = gsap.utils.toArray(".arrow-icon")
    gsap.set(getAllImages, {
      autoAlpha: 0,
      x: -40,
      scale: 1.2,
    })
    gsap.set(getAllArrows, {
      autoAlpha: 0,
      x: 40,
      scale: 0.7,
    })
    gsap.set(getAllProjects, {
      width: 0,
      autoAlpha: 0,
    })

    tlShowSidebar.current = gsap
      .timeline({ paused: true })
      .set("body", { overflow: "hidden" })
      .to(navTopRef.current, {
        y: 0,
        duration: 1,
        ease: "power3.inOut",
      })
      .to(
        ".menu",
        {
          x: 0,
        },
        0
      )
      .to(".logo-icon", { color: "#f7ede2", duration: 1 }, "<=0.7")
      .to(wordRef.current, { color: "#f7ede2", duration: 1 }, 0)
      .to(
        refs.current,
        {
          x: 0,
          duration: 1.5,
          stagger: {
            amount: 0.4,
          },
          ease: "expo.inOut",
        },
        "<=0.5"
      )
      .to(
        navLinksRef.current,
        {
          y: 0,
          // autoAlpha: 0,
          ease: "power4.inOut",
          duration: 1.2,
          stagger: {
            amount: 0.4,
          },
        },
        "<=1.5"
      )
      .to(
        recentRef.current,
        {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
        },
        "<=0.7"
      )
      .to(
        getAllProjects,
        {
          autoAlpha: 1,
          width: "100%",
          duration: 1,
        },
        "<=0.5"
      )
      .to(
        titlesRef.current,
        {
          y: 0,
          duration: 1,
        },
        "<=0.2"
      )
      .to(getAllArrows, { autoAlpha: 1, x: 0, scale: 1, duration: 1 }, "<=0.5")
      .to(getAllImages, { autoAlpha: 1, x: 0, scale: 1, duration: 1 }, "<=0.5")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    isMenuOpen ? tlShowSidebar.current.play() : tlShowSidebar.current.reverse()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuOpen])

  return (
    <>
      <Wrapper className="menu">
        <div className="top" ref={setRef}>
          <div className="wrapper">
            <h6>
              <span ref={setNavLinksRef}>Navigation</span>
            </h6>
            <ul>
              <li>
                <Link to="/">
                  <span ref={setNavLinksRef}>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span ref={setNavLinksRef}>About</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span ref={setNavLinksRef}>Projects</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span ref={setNavLinksRef}>Contacts</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <RecentProjects
          ref={setRef}
          recentRef={recentRef}
          setTitlesRef={setTitlesRef}
        />
        <div className="bottom" ref={setRef}>
          <div className="wrapper mid-container">
            <div className="socials">
              <h6>
                <span ref={setNavLinksRef}> Socials</span>
              </h6>
              <a href="http://">
                <span ref={setNavLinksRef}>LinkedIn</span>
              </a>
              <a href="http://">
                <span ref={setNavLinksRef}>GitHub</span>
              </a>
              <a href="http://">
                <span ref={setNavLinksRef}>Facebook</span>
              </a>
            </div>
            <div className="contacts">
              <h6>
                <span ref={setNavLinksRef}> Contacts </span>
              </h6>
              <a href="http://">
                <span ref={setNavLinksRef}>Write me in Facebook</span>
              </a>
              <a href="http://">
                <span ref={setNavLinksRef}>Email me</span>
              </a>
              <a href="http://">
                <span ref={setNavLinksRef}>sergio.malin@gmail.com</span>
              </a>
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
  /* display: none; */
  position: fixed;
  top: 90px;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 2;
  display: grid;
  height: calc(100vh - 90px);
  overflow-y: scroll;
  background-color: transparent;
  display: block;
  transform: translateX(100%);
  /* overflow: scroll; */
  /* background: #f7ede2;
  
  /* visibility: hidden; */ /* overflow-y: scroll; */ /* overflow: scroll; */
  /* transform: translateX(90%); */ /* visibility: hidden; */
  /* overflow: auto; */ /* transform: translateX(100%); */
  /* visibility: hidden; */ /* margin-top: 10vh; */
  .nav-top {
    /* background: transparent; */
    /* background-color: #1a2323; */
    padding-top: 3rem;
    padding-bottom: 3rem;
    height: 90px;
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
        h6 {
          overflow: hidden;
          display: block;
          span {
            transform: translateY(100%);
            display: block;
          }
        }

        a {
          color: #d0dcdc;
          overflow: hidden;
          display: block;
          span {
            transform: translateY(100%);
            display: block;
          }
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
        h6 {
          overflow: hidden;
          display: block;
          span {
            transform: translateY(100%);
            display: block;
          }
        }
        a {
          color: #d0dcdc;
          overflow: hidden;
          display: block;
          span {
            transform: translateY(100%);
            display: block;
          }
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
