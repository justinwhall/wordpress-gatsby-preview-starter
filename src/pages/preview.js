import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import NotFound from './404';
import Layout from "../components/layout"


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

const preview = (props) => {
  const {
    id,
    nonce,
    postType,
  } = props;

  const intId = parseInt(id);

  return (
    <Query
    query={PREVIEW_QUERY}
    variables={{
      id: intId,
      nonce,
      postType,
    }}
    >
      {({ data, loading, error }) => {
        if (loading) return <p>Loading preview...</p>;
        if (error) return <p>Error: ${error.message}</p>;

        if (!data.postBy.revisions.nodes.length) {
          return <NotFound />
        }

        const preview = data.postBy.revisions.nodes[0];
        if (!preview) {
          return null;
        }

        return (
          <Layout location={props.location} >
            <h1>{preview.title}</h1>
            <div dangerouslySetInnerHTML={{__html: preview.content}} />
          </Layout>
        )
      }}
    </Query>
  );
}

export default preview;