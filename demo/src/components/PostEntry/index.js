import React from "react";
import { Link, graphql } from "gatsby";

const PostEntry = ({ post }) => {
  console.log(post);

  const {
    title,
    content,
    uri,
  } = post;

  return (
    <div>
      <h2>
        <Link to={`/blog/${uri}`}>{title}</Link>
      </h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default PostEntry

export const query = graphql`
  fragment PostEntryFragment on WPGraphQL_Post {
    id
    title
    uri
    content: excerpt
    author {
      name
      slug
      avatar(size: 100) {
        url
      }
    }
  }
`