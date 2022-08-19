import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"
import { useRef } from "react"
import { useArrayRef } from "../context/context"
gsap.registerPlugin(ScrollTrigger)

export const query = graphql`
  query {
    allContentfulMalinaPortfolio(filter: { featured: { eq: true } }) {
      nodes {
        id
        gitUrl
        projectUrl
        title
        tag
        description
        image {
          gatsbyImageData(
            height: 550
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(query)
  const featuredProjects = data.allContentfulMalinaPortfolio.nodes

  const triggerRef = useRef()
  const aboutBtnRef = useRef()
  const fillAboutBtnRef = useRef()

  const [titleArrayRefs, setTitleArrayRefs] = useArrayRef()
  const [projectsArrayRefs, setProjectsArrayRef] = useArrayRef()

  const onMouseEnter = () => {
    gsap.timeline({ defaults: { duration: 0.5 } }).to(fillAboutBtnRef.current, {
      y: 0,
      autoAlpha: 1,
      startAt: {
        y: "-100%",
      },
    })
  }

  const handleMouseMove = e => {
    let strength = 70
    let bounding = aboutBtnRef.current.getBoundingClientRect()
    gsap.to(aboutBtnRef.current, {
      x:
        ((e.clientX - bounding.left) / aboutBtnRef.current.offsetWidth - 0.5) *
        strength,
      y:
        ((e.clientY - bounding.top) / aboutBtnRef.current.offsetHeight - 0.5) *
        strength,
      ease: "Power4.easeOut",
    })
  }
  const handleMouseLeave = e => {
    gsap.to(aboutBtnRef.current, {
      x: 0,
      y: 0,
      ease: "Power4.easeOut",
      duration: 1,
    })
    gsap.to(fillAboutBtnRef.current, {
      y: "100%",
    })
  }

  useEffect(() => {
    // console.log(triggerRef.current.scrollWidth)
    // console.log(window.innerWidth)
    // console.log(triggerRef.current.offsetWidth)
    let sections = gsap.utils.toArray(".projects .projects-container .project")

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        start: "top top",
        end: () => "+=" + triggerRef.current.offsetWidth,
        snap: 1 / (sections.length - 1),
        // start: "0% 0%",
        // end: () => "+=" + triggerRef.current.scrollWidth - window.innerWidth,
        scrub: true,
        anticipatePin: 1,
        markers: true,
      },
    })
  }, [])

  return (
    <Wrapper>
      <div className="row wrapper">
        <article className="header">
          <h4>
            Helping brands to stand out in the digital era. Together we will set
            the new status quo. No nonsense, always on the cutting edge.
          </h4>
        </article>
        <article className="info">
          <p>
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </p>
          <button
            ref={aboutBtnRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={onMouseEnter}
          >
            <div className="btn-fill" ref={fillAboutBtnRef}></div>
            <span>About me</span>
          </button>
        </article>
      </div>
      <div className="projects wrapper">
        <h6>recent work</h6>
        <ul className="projects-container" ref={triggerRef}>
          {featuredProjects.map(featureProject => {
            const { id, projectUrl, title, image, tag, description } =
              featureProject
            const pathToImage = getImage(image)
            return (
              <li key={id} className="project" ref={setProjectsArrayRef}>
                <div className="title" ref={setTitleArrayRefs}>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
                <div className="img-container">
                  <GatsbyImage image={pathToImage} alt={title} />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  padding-top: 15rem;
  /* background-color: #201509; */
  color: #201509;
  .row {
    display: grid;
    font-family: "Cairo", sans-serif;
    grid-template-columns: 2fr 1fr;
    width: 90vw;
    gap: 2rem;
    /* position: relative; */
    /* padding-bottom: 10rem; */

    .header {
      /* padding-left: 4rem;
      padding-right: 2rem; */
      display: flex;
      /* align-items: center; */
      justify-content: center;

      h4 {
        width: 80%;
        font-size: clamp(1rem, 2.2vw, 1.6rem);
        font-weight: 300;
        letter-spacing: 0.02rem;
        /* width: 70%; */
      }
    }
    .info {
      /* width: 70%; */
      /* padding-right: 2rem; */
      display: flex;
      /* align-items: center; */
      justify-content: start;
      position: relative;
      p {
        font-size: clamp(0.8rem, 1.4vw, 1.2rem);
        /* position: relative; */
        font-weight: 400;
        letter-spacing: 0.02rem;
      }
      button {
        position: absolute;
        top: 150%;
        background-color: rgb(11, 19, 43, 0.9);
        color: #f7ede2;
        border-radius: 50%;
        padding: 3.8rem;
        border: transparent;
        overflow: hidden;
        .btn-fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #57190f;
          transform: translateY(-100%);
          border-radius: 0.15rem;
          border-radius: 50%;
          /* opacity: 0; */
          cursor: pointer;
          will-change: transform;
          z-index: -1;
        }
        span {
          position: absolute;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          z-index: 10;
        }
      }
    }
  }
  .projects {
    position: relative;
    margin-top: 15rem;
    height: 100vh;

    /* overscroll-behavior: none; */
    /* width: 100vw; */

    .projects-container {
      /* display: flex;
      flex-wrap: nowrap;
      white-space: nowrap;
      width: 400%; */
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 100%;
      /* width: 100%; */
      /* height: 80vh; */
      padding: 10vh 0;
      overscroll-behavior: none;
      /* overflow: hidden; */
      aspect-ratio: 16/9;
      height: 100%;
      /* display: grid;
      grid-template-columns: 20vw 1fr 200px; */
      width: 100vw;

      .project {
        position: relative;
        display: grid;
        grid-template-columns: 1.2fr 2fr;
        align-items: center;
        will-change: transform;
        height: 100%;
        width: 100%;
        /* margin-right: 10rem; */
        /* width: 100%;
        height: 100%; */

        .title {
          position: relative;
          z-index: 10;

          h4 {
            font-size: clamp(1.4rem, 4.2vw, 6rem);
            letter-spacing: 0.02rem;
            margin-bottom: 0.8rem;
          }
          p {
            font-size: clamp(0.6rem, 1.2vw, 1.4rem);
            letter-spacing: 0.02rem;
          }
        }
        .img-container {
          position: absolute;
          top: 10%;
          right: 0;
        }
      }
    }
  }
`

export default Projects
