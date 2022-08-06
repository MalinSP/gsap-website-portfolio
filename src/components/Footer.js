import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper className="wrapper">
      <div className="scroll">Scroll to explore</div>
      <div className="btn-container">
        <button>LET'S CONNECT</button>
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
    button {
      background-color: rgb(11, 19, 43, 0.9);
      color: white;
      border: transparent;
      border-radius: 0.15rem;
      padding: 1rem 2rem;
      letter-spacing: 0.12rem;
      cursor: pointer;
      color: #f7ede2;
    }
  }
  .info {
    font-size: 0.8rem;
    font-weight: 200;
    color: #301f0d;
  }
`
export default Footer
