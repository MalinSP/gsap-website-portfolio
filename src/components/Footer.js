import React from "react"
import { useEffect } from "react"
import { useRef } from "react"
import styled from "styled-components"
import gsap from "gsap"

const Footer = () => {
  const btnRef = useRef()
  const btnFillRef = useRef()

  const onMouseEnter = () => {
    gsap.timeline({ defaults: { duration: 0.5 } }).to(btnFillRef.current, {
      x: 0,
      autoAlpha: 1,
      startAt: {
        x: "100%",
      },
    })
  }

  const handleMouseMove = e => {
    let strength = 70
    let bounding = btnRef.current.getBoundingClientRect()
    gsap.to(btnRef.current, {
      x:
        ((e.clientX - bounding.left) / btnRef.current.offsetWidth - 0.5) *
        strength,
      y:
        ((e.clientY - bounding.top) / btnRef.current.offsetHeight - 0.5) *
        strength,
      ease: "Power4.easeOut",
    })
  }
  const handleMouseLeave = e => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      ease: "Power4.easeOut",
      duration: 1,
    })
    gsap.to(btnFillRef.current, {
      x: "-100%",
    })
  }

  return (
    <Wrapper className="wrapper">
      <div className="scroll">Scroll to explore</div>
      <div
        className="btn-container"
        ref={btnRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={onMouseEnter}
      >
        <button>
          <span>LET'S CONNECT</span>
          <div className="btn-fill" ref={btnFillRef}></div>
        </button>
      </div>
      <div className="info">Code @Sergey</div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  position: relative;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .scroll {
    font-size: 0.8rem;
    font-weight: 200;
    color: #301f0d;
  }
  .btn-container {
    position: relative;
    overflow: hidden;
    button {
      background-color: rgb(11, 19, 43, 0.9);
      border: transparent;
      border-radius: 0.15rem;
      padding: 1rem 2rem;
      letter-spacing: 0.12rem;
      cursor: pointer;
      color: #f7ede2;
      will-change: transform, color;
      position: relative;
      .btn-fill {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #57190f;
        transform: translateX(-100%);
        border-radius: 0.15rem;
        /* opacity: 0; */
        cursor: pointer;
        will-change: transform;
        z-index: -1;
      }
      span {
        z-index: 10;
      }
    }
  }
  .info {
    font-size: 0.8rem;
    font-weight: 200;
    color: #301f0d;
  }
`
export default Footer
