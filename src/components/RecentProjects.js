import React, { forwardRef } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FiArrowUpRight } from "react-icons/fi"

export const query = graphql`
  query {
    allContentfulMalinaPortfolio(filter: { featured: { eq: true } }) {
      nodes {
        id
        gitUrl
        projectUrl
        title
        image {
          gatsbyImageData(
            height: 350
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`

const RecentProjects = forwardRef(({ recentRef, setTitlesRef }, ref) => {
  const data = useStaticQuery(query)
  const featuredProjects = data.allContentfulMalinaPortfolio.nodes

  return (
    <Wrapper className="recent-projects" ref={ref}>
      <div className="projects-container">
        <aside>
          <span ref={recentRef}>Recent projects</span>
        </aside>
        {featuredProjects.map(featureProject => {
          const { id, projectUrl, title, image } = featureProject
          const pathToImage = getImage(image)
          return (
            <article key={id} className="project">
              <hr className="bg" />
              <div className="project-info">
                <h5>
                  <span ref={setTitlesRef}>{title}</span>
                </h5>
                <a href={projectUrl} className="arrow-icon">
                  <FiArrowUpRight />
                </a>
              </div>

              <GatsbyImage
                image={pathToImage}
                className="project-img"
                alt={title}
              />
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
})

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 2%;
  position: relative;
  z-index: 100;
  background-color: #f7ede2;
  transform: translateX(100%);
  /* z-index: 100; */

  .projects-container {
    position: relative;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 50%;
    overflow-x: auto;
    gap: 1.6rem;
    margin: 0 auto;
    padding-left: 10%;
    padding-right: 2%;
    aside {
      position: absolute;
      text-align: center;
      transform-origin: center top;
      transform: translateX(-50%) rotate(-90deg);
      top: 25%;
      font-size: 1.2rem;
      letter-spacing: -0.01rem;
      font-weight: 400;
      display: block;
      overflow: hidden;
      span {
        display: block;
        position: relative;
        transform: translateY(100%);
      }
    }
    .project {
      display: grid;
      gap: 1rem;
      cursor: pointer;
      position: relative;
      .bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        content: " ";
        height: 1px;
        background: black;
        z-index: 100;
      }
      .project-info {
        margin-top: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h5 {
          letter-spacing: -0.02rem;
          overflow: hidden;
          display: block;
          span {
            display: block;
            transform: translateY(100%);
          }
        }
        a {
          position: relative;
          width: 35px;
          height: 35px;

          :before {
            position: absolute;
            background: white;
            width: 100%;
            height: 100%;
            content: " ";
            z-index: -1;
            border-radius: 50%;
          }
          svg {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 1.2rem;
            color: gray;
          }
        }
      }
      .project-img {
        display: block;
        border-radius: 0.25rem;
      }
    }
  }
`

export default RecentProjects
