import React from "react";
import { graphql } from "gatsby";
import gql from 'graphql-tag';
import Layout from "../components/layout";
import withPreview from '../../../theme/src/components/withPreview';

const PostTemplate = (props) => {

  const postData = props.preview ?
    props.preview.postBy.revisions.nodes[0] :
    props.data.wpgraphql.post

  const {
    title,
    content,
  } = postData;

  return (
    <Layout location={props.location}>
      <h1>{title}</h1>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

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

const PREVIEW_QUERY = gql`
  query getPreview($id: Int!) {
    postBy(postId: $id) {
      title
      revisions {
        nodes {
          id
          title
          content
        }
      }
    }
  }
`;

export default withPreview({ preview: PREVIEW_QUERY })(PostTemplate);