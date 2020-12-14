import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import "./contact.css"
import ContactIcon from "../images/contact-icon.png"

const ContactPage = () => (
  <div className="contact-div">
  <SEO title="Contact" />
    <div className="contact-box">
    
      <img src={ContactIcon} alt="contactIcon"/>
      <div>
        <p>chohui park</p>
        <p>Frontend Developer</p>
        <p>email:<strong>chgml1215@naver.com</strong></p>
        <p>Go to Git</p><a style={{color:`white`}} href="https://github.com/ChoheeP">ChoheeP</a>
      </div>
    </div>
  </div>

)

export default ContactPage