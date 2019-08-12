import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { rhythm } from "../../utils/typography";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const {
    author,
    social,
  } = data.site.siteMetadata;

  return (
    <div
    style={{
      display: `flex`,
      marginBottom: rhythm(1.5),
      padding: rhythm(1),
      background: `rgba(0, 122, 204, 0.1)`,
    }}
  >
    <Image
      fixed={data.avatar.childImageSharp.fixed}
      alt={author}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        minWidth: 50,
        borderRadius: `100%`,
      }}
      imgStyle={{
        borderRadius: `50%`,
      }}
    />
    <div>
      Created by <strong>{author}</strong> who lives and works in Denver, CO. <br />
      {` `}
      <a href={`https://twitter.com/${social.twitter}`}>
        You should follow him on Twitter
      </a>
    </div>
  </div>
  )
}

export default Bio