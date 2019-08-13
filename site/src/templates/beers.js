import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const BeersTemplate = (props) => {
  const {
    nodes,
  } = props.data.wpgraphql.beers;

  return (
    <Layout location={props.location} title={'WordPress + Gatsby'}>
      {nodes.map(node => (
        <Link key={node.id} to={`/beer/${node.uri}`}>
          <h1>{node.title}</h1>
        </Link>
      ))}
    </Layout>
  )

}

export default BeersTemplate

export const query = graphql`
  query GET_BEERS($ids: [ID]) {
    wpgraphql {
      beers(where: { in: $ids }) {
        nodes {
          id
          title
          uri
        }
      }
    }
  }
`
