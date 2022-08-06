import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Parallax from "parallax-js"

const Hero = () => {
  const parallaxRef = useRef()

  useEffect(() => {
    const parallaxInstance = new Parallax(parallaxRef.current, {
      hoverOnly: true,
      invertX: true,
      invertY: true,
      scalarX: 10,
      frictionY: 0.1,
    })
    console.log(parallaxInstance)
    parallaxInstance.enable()
    parallaxInstance.friction(0.2, 0.2)

    return () => parallaxInstance.disable()
  }, [])

  return (
    <Wrapper className="wrapper" ref={parallaxRef}>
      <div className="hero">
        <h1>
          <div className="row top-row" data-depth="1.00">
            <span data-depth="0.80">Transform your ideas</span>
            <span data-depth="0.60" className="underline-hero">
              achieve your goals
            </span>
          </div>
          <div className="row middle-row" data-depth="0.5">
            <span data-depth="0.4">into digital products and</span>
            <span data-depth="0.3" className="underline-hero">
              through user experience
            </span>
          </div>
          <div className="row bottom-row">
            <span>help your business grow</span>
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
      .row {
        line-height: 1.1;
      }
      .top-row {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        position: relative;
        margin-right: 20%;
        color: #301f0d;
        font-weight: 700;
        font-family: "Cairo", sans-serif;
        .underline-hero {
          font-size: clamp(0.6rem, 1.2vw, 0.8rem);
          border: 1px solid #301f0d;
          border-radius: 0.35rem;
          padding: 0.1rem 0.22rem;
          position: absolute;
          top: 110%;
          font-weight: 600;
          left: -5%;
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
        .underline-hero {
          font-size: clamp(0.6rem, 1.2vw, 0.8rem);
          border: 1px solid #301f0d;
          border-radius: 0.35rem;
          padding: 0.1rem 0.22rem;
          position: absolute;
          top: 110%;
          right: -2%;
          color: #301f0d;
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
      }
    }
  }
`
export default Hero
