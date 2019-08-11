import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import { rhythm } from "../utils/typography"
// import Bio from "../components/bio"
// import SEO from "../components/seo"

const PostTemplate = (props) => {
  const {
    title,
    content,
  } = props.data.wpgraphql.post;

  return (
    <Layout location={props.location}>
      <h1>{title}</h1>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )

}

export default PostTemplate

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        uri
      }
    }
  }
`
