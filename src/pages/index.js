import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout"


export const GatsbyQuery = graphql`
  {
    wordpress {
      posts {
        nodes {
          title
          excerpt
        }
      }
    }
  }
`;

export default ({ data, location }) => {
  const {nodes} = data.wordpress.posts;
  return (
    <Layout location={location}>
      <hr />
      {nodes.map(post => (
        <div key={post.title} className="post">
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{__html: post.excerpt}} />
        </div>
      ))}
    </Layout>
  )
}
