import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <Wrapper>
      <div className="top">
        <div className="wrapper">
          <h6>Navigation</h6>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="wrapper mid-container">
          <div className="socials">
            <h6>Socials</h6>
            <a href="http://">LinkedIn</a>
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
              Version: <br /> {new Date().getFullYear()} &copy; Edition
            </span>
            <span>
              Local Time <br />
              {new Date().getHours() + ":" + new Date().getMinutes()}
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  background: white;
  z-index: 10;
  /* transform: translateX(100%); */
  visibility: hidden;
  margin-top: 10vh;
  .top {
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: grid;
    align-content: center;
    gap: 1.4rem;
    background: black;
    h6 {
      font-size: small;
      color: #0465d6;
      margin-bottom: 1.2rem;
    }
    ul {
      line-height: normal;
      display: grid;
      gap: 0.2rem;
      li {
        a {
          text-decoration: none;
          color: #0465d6;
          font-size: clamp(1rem, 3vw, 5rem);
          letter-spacing: -0.05rem;
          font-weight: 200;
          font-family: "Cairo", sans-serif;
        }
      }
    }
  }
  .bottom {
    background: gray;
    .mid-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 3rem;
      padding-bottom: 3rem;
      h6 {
        font-size: small;
        margin-bottom: 1rem;
      }
      .socials {
        display: grid;
        a {
          color: white;
        }
      }
      .contacts {
        display: grid;
        a {
          color: white;
        }
      }
      .info {
        display: grid;
        font-size: small;
      }
    }
  }
`

export default Menu
