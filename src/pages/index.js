import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Label Your Icons" />
    <p className="lede">There is a scourge taking over digital design: icons <span className="nowrap">without labels</span>.</p>
    <p className="lede">You can help put an end to this bewildering practice. Add a label to your icon. Add labels to <strong>all</strong> your icons.</p>
  </Layout>
)

export default IndexPage
