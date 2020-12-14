import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
 <div>
    <SEO title="Home" />
    <Link to="/about" style={{textDecoration:`none`}}>
      <div className="index-box">
        <p>About me</p>
      </div>
    </Link>

    <Link to="/skill" style={{textDecoration:`none`}}>
      <div className="index-box">
        <p>skills</p>
      </div>
    </Link>

    <Link to="/contact" style={{textDecoration:`none`}}>
      <div className="index-box">
        <p>Contact me</p>
      </div>
    </Link>
</div>
)

export default IndexPage
