import React from "react";
import { Link } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import Bio from "./Bio";

const Layout = (props) => {
    const { children } = props

    const header = (
        <>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              WordPress + Gatsby
            </Link>
          </h1>
          <div
          style={{
            ...scale(0.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            color: '#666',
          }}
          >
            With <span role="img" aria-label="heart">💖</span> for Live Previews
          </div>
          <Bio />
        </>
    );

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(29),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <iframe
          title="Star on GitHub"
          src="https://ghbtns.com/github-btn.html?user=justinwhall&repo=wordpress-gatsby-preview-starter&type=star&count=true&size=large"
          frameBorder="0"
          scrolling="0"
          width="158px"
          height="30px"
          style={{
            position: 'absolute',
            left: 10,
            top: 10,
          }}
          ></iframe>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` `}
          | Built by <a href="https://justinwhall.com">Justin W. Hall</a>
        </footer>
      </div>
    )
}

export default Layout
