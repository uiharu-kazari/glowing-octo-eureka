import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
              {
                data.allFile.nodes.map(node => (
                  <li key={node.name}>
                    {node.name}
                  </li>
                )
                )
              }
            </ul>
        </Layout>

    )
}

export const query = graphql`{
  allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
    nodes {
      name
    }
  }
}
`

export default BlogPage

// https://www.gatsbyjs.com/docs/tutorial/part-4/
// When your site gets built, Gatsby will run your page query and pass the resulting data into your page component as a prop called data.