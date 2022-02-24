const path = require('path')

exports.createSchemaCustomization = ({ 
  actions: { createTypes }
}) => {
  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }

    type MdxFrontmatter {
      templateKey: String
      featuredpost: Boolean
      tags: [String]
    }
  `)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `)
  
  if (result.errors) {
    result.errors.forEach(e => console.error(e.toString()))
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges
  console.log(posts)
  posts.forEach(({node}, index) => {
    createPage({
      path: node.slug,
      tags: node.frontmatter.tags,
      component: path.resolve(
        `./src/templates/${String(node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        id: node.id
      },
    })
  })

  //TODO: Tag pages:
  // let tags = []
  // // Iterate through each post, putting all found tags into `tags`
  // posts.forEach((edge) => {
  //   if (_.get(edge, `node.frontmatter.tags`)) {
  //     tags = tags.concat(edge.node.frontmatter.tags)
  //   }
  // })
  // // Eliminate duplicate tags
  // tags = _.uniq(tags)

  // // Make tag pages
  // tags.forEach((tag) => {
  //   const tagPath = `/tags/${_.kebabCase(tag)}/`

  //   createPage({
  //     path: tagPath,
  //     component: path.resolve(`src/templates/tags.js`),
  //     context: {
  //       tag,
  //     },
  //   })
  // })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

