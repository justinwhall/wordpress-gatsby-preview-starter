import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostEntry from "../components/PostEntry";

// import Bio from "../components/bio"
// import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

const BlogTemplate = (props) => {
  const {
    nodes
  } = props.data.wpgraphql.posts;

  return (
    <Layout location={props.location} title={'WordPress + Gatsby'}>
      {nodes.map(node => <PostEntry key={node.id} post={node} />)}
    </Layout>
  )

}

export default BlogTemplate

export const query = graphql`
  query GET_POSTS($ids: [ID]) {
    wpgraphql {
      posts(where: { in: $ids }) {
        nodes {
          ...PostEntryFragment
        }
      }
    }
  }
`
