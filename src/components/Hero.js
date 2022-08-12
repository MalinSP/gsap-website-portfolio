import React, { useLayoutEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"

const Hero = () => {
  useLayoutEffect(() => {
    const lines = gsap.utils.toArray([".row p"])
    const tlHero = gsap.timeline({ defaults: { ease: "none" } })
    tlHero
      .to(lines, {
        delay: 1,
        y: 0,
        duration: 1.8,
        ease: "back",
        stagger: {
          amount: 0.3,
        },
      })
      .set(".row", { css: { overflow: "visible" } })
    tlHero.to(".underline-hero", {
      y: 0,
      autoAlpha: 1,
    })
  }, [])

  return (
    <Wrapper className="wrapper">
      <div className="hero">
        <h1>
          <div className="row top-row">
            <p>Transform your ideas</p>
            <span className="underline-hero">achieve your goals</span>
          </div>
          <div className="row middle-row">
            <p>into digital products and</p>
            <span className="underline-hero">through user experience</span>
          </div>
          <div className="row bottom-row">
            <p>help your business grow</p>
          </div>
        </h1>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  height: 80vh;
  z-index: 2;
  .hero {
    width: 100%;
    max-width: 1350px;

    h1 {
      position: relative;
      display: grid;
      place-items: center;
      font-size: clamp(0.8rem, 5vw, 4.5rem);
      text-transform: uppercase;
      overflow: hidden;
      /* line-height: 10.3rem; */
      .row {
        line-height: 1.1;
      }
      .top-row {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        margin-right: 20%;
        color: #301f0d;
        font-weight: 700;
        font-family: "Cairo", sans-serif;
        overflow: hidden;
        position: relative;
        p {
          transform: translateY(100%);
        }
        .underline-hero {
          font-size: clamp(0.6rem, 1.2vw, 0.8rem);
          border: 1px solid #301f0d;
          border-radius: 0.35rem;
          padding: 0.1rem 0.22rem;
          position: absolute;
          top: 110%;
          font-weight: 600;
          left: -5%;
          transform: translateY(-100%);
          opacity: 0;
        }
      }
      .middle-row {
        display: flex;
        margin-left: 20%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        color: #455e58;
        font-weight: 600;
        font-family: "Cairo", sans-serif;
        overflow: hidden;
        position: relative;
        p {
          transform: translateY(100%);
        }
        .underline-hero {
          font-size: clamp(0.6rem, 1.2vw, 0.8rem);
          border: 1px solid #301f0d;
          border-radius: 0.35rem;
          padding: 0.1rem 0.22rem;
          position: absolute;
          top: 110%;
          right: -1%;
          color: #301f0d;
          transform: translateY(-100%);
          opacity: 0;
        }
      }
      .bottom-row {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-left: -20%;
        color: #301f0d;
        font-weight: 700;
        font-family: "Cairo", sans-serif;
        overflow: hidden;
        position: relative;
        p {
          transform: translateY(100%);
        }
      }
    }
  }
`
export default Hero
