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
  const [descriptionArrayRefs, setDescriptionArrayRefs] = useArrayRef()
  const [projectsArrayRefs, setProjectsArrayRef] = useArrayRef()
  const [imagesArrayRefs, setImagesArrayRef] = useArrayRef()

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

  const scrollTween = useRef()

  useEffect(() => {
    const totalProjects = projectsArrayRefs.current.length
    // gsap.set([projectsArrayRefs].current, { autoAlpha: 0 })

    scrollTween.current = gsap.to(projectsArrayRefs.current, {
      xPercent: -100 * (totalProjects - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1.3,
        snapTo: 1 / (totalProjects.length - 1),
        end: () => "+=" + triggerRef.current.scrollWidth - window.innerWidth,
      },
    })
  }, [])

  useEffect(() => {
    projectsArrayRefs.current.forEach((project, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: project,
            start: "left 50%",
            end: () => "+=" + project.offsetWidth,
            toggleActions: "play play play reverse",
            containerAnimation: scrollTween.current,
            markers: true,
            id: `project-${index + 1}`,
          },
        })
        .from(
          project,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 1,
          }
        )
      // .fromTo(
      //   titleArrayRefs.current,
      //   {
      //     yPercent: 130,
      //     autoAlpha: 0,
      //   },
      //   {
      //     yPercent: 0,
      //     autoAlpha: 1,
      //     duration: 1.3,
      //     ease: "power3.out",
      //     // stagger: 0.13,
      //   },
      //   0
      // )
      // .fromTo(
      //   descriptionArrayRefs.current,
      //   {
      //     yPercent: 220,
      //     autoAlpha: 0,
      //   },
      //   {
      //     ease: "power3.out",
      //     duration: 1.3,
      //     stagger: 0.13,
      //     autoAlpha: 1,
      //     yPercent: 0,
      //   },
      //   0
      // )
      // .fromTo(
      //   imagesArrayRefs.current,
      //   { height: 0, autoAlpha: 0, scale: 2.2, yPercent: -22 },
      //   {
      //     height: "100%",
      //     ease: "power3.inOut",
      //     duration: 1.3,
      //     autoAlpha: 1,
      //     scale: 1,
      //     yPercent: 0,
      //   },
      //   0
      // )
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
      <div className="projects wrapper" ref={triggerRef}>
        <h6>recent work</h6>
        <div className="projects-container">
          {featuredProjects.map(featureProject => {
            const { id, projectUrl, title, image, tag, description } =
              featureProject
            const pathToImage = getImage(image)
            return (
              <article key={id} className="project" ref={setProjectsArrayRef}>
                <div className="title active">
                  <h4 ref={setTitleArrayRefs}>{title}</h4>
                  <p ref={setDescriptionArrayRefs}>{description}</p>
                </div>
                <div className="img-container" ref={setImagesArrayRef}>
                  <GatsbyImage
                    image={pathToImage}
                    alt={title}
                    className="project-image"
                  />
                </div>
              </article>
            )
          })}
        </div>
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
    margin-top: 10rem;
    height: 100vh;
    /* overscroll-behavior: none; */
    /* position: relative; */
    h6 {
    }
    .projects-container {
      height: 100vh;
      /* padding: 10vh 0; */
      width: 400%;
      display: flex;
      flex-wrap: nowrap;

      /* overscroll-behavior: none; */
      .project {
        width: 100%;
        height: 100%;
        position: relative;
        /* will-change: transform; */

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title {
          h4 {
          }
          p {
          }
        }
        .img-container {
          /* visibility: hidden; */
          .project-img {
            /* visibility: hidden; */
          }
        }
      }
    }
  }
`

export default Projects
