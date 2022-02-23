/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types"
import useSiteMetadata from "../hooks/useSiteMetadata"
import Footer from "./Footer"
import "./layout.css"
import Navbar from "./Navbar";
import { withPrefix } from "gatsby";

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <div>
      <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description}/>
          <meta name="theme-color" content="#fff" />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta
            property="og:image"
            content={`${withPrefix("/")}img/og-image.jpg`}
          />
      </Helmet>
      {/* <Header siteTitle={title || `Title`} /> */}
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
