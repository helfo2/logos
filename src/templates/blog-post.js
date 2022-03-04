import React from "react"
import { kebabCase } from "lodash"
import { graphql, Link } from "gatsby"
import Layout from "../components/MyLayout"
import { Helmet } from "react-helmet";

export const BlogPostTemplate = ({
	title,
	description,
	tags,
	children,
	helmet,
}) => {

	return (
		<section className="section">
			{helmet || ""}
			<div className="container content">
				<div className="columns">
					<div className="column is-10 is-offset-1">
						<h1 className="title is-size-2 has-text-weight-bold is-bold-light">
							{title}
						</h1>
						<p>{description}</p>
						{children}
						blabla
						{tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
					</div>
				</div>
			</div>
		</section>
	)
}

const BlogPost = ({ data: { mdx } }) => {
	return (
		<Layout>
			<BlogPostTemplate
				title={mdx.frontmatter.title}
				description={mdx.frontmatter.description}
				helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${mdx.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${mdx.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={mdx.frontmatter.tags}
			/>
		</Layout>
	)
}

export default BlogPost

export const pageQuery = graphql`
	query BlogPostById($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
				description
				tags
			}
		}
	}
`