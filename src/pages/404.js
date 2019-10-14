import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="landing-page-section">
      <div className="landing-page-section mx-auto mw-1024 p3">
        <h1>Not found</h1>
        <p>That page doesn’t exist. Try visit the <Link to="/">home page</Link>.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
