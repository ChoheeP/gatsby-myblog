import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/404" style={{textDecoration:`none`}}>
      <div className="index-box">
        <p>About me</p><p>></p>
      </div>
    </Link>

    <Link to="/404" style={{textDecoration:`none`}}>
      <div className="index-box">
        <p>skills</p><p>></p>
      </div>
    </Link>

    <Link to="/404" style={{textDecoration:`none`}}>
      <div className="index-box">
        <p>Contact me</p><p>></p>
      </div>
    </Link>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
