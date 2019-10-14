/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer className="bg-daintree reversed landing-page-section">
        <div className="mx-auto mw-1024 p3">
          <p>
            © {new Date().getFullYear()} Diana MacDonald.
          </p>
          <p>
            Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>.
          </p>
          <p style={{ marginLeft: `-0.85rem` }}>
            <a style={{ marginLeft: `2rem` }} className="svg-icon-wrapper svg-baseline" aria-label="GitHub" href="https://github.com/didoesdigital/label-your-icons">
              <svg xmlns="http://www.w3.org/2000/svg" role="presentation" viewBox="0 0 512 512" style={{ marginLeft: `-1.25rem` }}>
                <rect width="512" height="512" rx="0" fill="transparent"/>
                <path fill="#fff" d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"/>
              </svg>
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
