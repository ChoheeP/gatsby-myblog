import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import Menu from "../images/menu.png"

const Header = ({ siteTitle, menuLinks }) => {
  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(!showResults)

  const handleCickOutside = () => {

  }


  return (
  <header
    style={{
      backgroundColor: `black`,
      marginBottom: `1.45rem`,
      display:`inline`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <nav>
          <button style={{float:`right`, background:`none`, border:`none`}} onClick={onClick}><img src={Menu} alt="menu-img"/></button>
          {showResults ? 
          <div>
          <ul style={{ float:`right`, opacity:`1` }}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: `none`,
                  padding: `1rem`,
                }}
              >
                <Link style={{ color: `white`, textDecoration:`none` }} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          </div>
          : null}
        </nav>
      </div>
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
