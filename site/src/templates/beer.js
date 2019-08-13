import React from "react";
import { graphql } from "gatsby";
import gql from 'graphql-tag';
import Layout from "../components/layout";
import withPreview from '../../../theme/src/components/withPreview';

const BeerTemplate = (props) => {

  /**
   * Determine if we're looking at a preview or live page.
   */
  const postData = props.preview ?
    props.preview.beerBy.revisions.nodes[0] :
    props.data.wpgraphql.beer

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
  query GET_BEER($id: ID!) {
    wpgraphql {
      beer(id: $id) {
        title
        content
        uri
      }
    }
  }
`

const PREVIEW_QUERY = gql`
  query getPreview($id: Int!) {
    beerBy(beerId: $id) {
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

export default withPreview({ preview: PREVIEW_QUERY })(BeerTemplate);