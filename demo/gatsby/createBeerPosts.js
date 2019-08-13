const path = require(`path`)
module.exports = async ({ actions, graphql }) => {
  const GET_POSTS = `
  query GET_POSTS($first:Int $after:String){
    wpgraphql {
      beers(
        first: $first
        after:$after
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          uri
          beerId
          title
        }
      }
    }
  }
  `
  const { createPage } = actions
  const allPosts = []
  const blogPages = []
  let pageNumber = 0
  const fetchPosts = async variables =>
    await graphql(GET_POSTS, variables).then(({ data }) => {
      const {
        wpgraphql: {
          beers: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      const nodeIds = nodes.map(node => node.beerId)
      console.log('beers => ', nodeIds);

      const blogTemplate = path.resolve(`./src/templates/beers.js`)
      const blogPagePath = !variables.after ? `/beers/` : `/beers/page/${pageNumber}`

      blogPages[pageNumber] = {
        path: blogPagePath,
        component: blogTemplate,
        context: {
          ids: nodeIds,
          pageNumber: pageNumber,
          hasNextPage: hasNextPage,
        },
        ids: nodeIds,
      }
      nodes.map(post => {
        allPosts.push(post)
      })
      if (hasNextPage) {
        pageNumber++
        return fetchPosts({ first: 12, after: endCursor })
      }
      return allPosts
    })

  await fetchPosts({ first: 12, after: null }).then(allPosts => {
    const postTemplate = path.resolve(`./src/templates/beer.js`)

    blogPages.map(blogPage => {
      console.log(`createBeersPage ${blogPage.context.pageNumber}`)
      createPage(blogPage)
    })

    allPosts.map(post => {
      console.log(`create beer post: ${post.uri}`)
      createPage({
        path: `/beer/${post.uri}/`,
        component: postTemplate,
        context: post,
      })
    })
  })
}