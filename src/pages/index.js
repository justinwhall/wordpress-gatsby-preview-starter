import React from 'react';
import { graphql } from 'gatsby';

// This query is executed at build time by Gatsby.
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

export default ({ data }) => {
  const {nodes} = data.wordpress.posts;
  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '50px auto' }}>
      <h1> Gatsby Preview with Apollo</h1>
      <hr />
      {nodes.map(post => (
        <div key={post.title} className="post">
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{__html: post.excerpt}} />
        </div>
      ))}
    </div>
  )
}
