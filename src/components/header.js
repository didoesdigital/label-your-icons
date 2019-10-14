import { Link } from "gatsby"
import logo from "../images/lyi-logo-circle.svg"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#61234e`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav
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
          <div style={{ maxWidth: `650px`, display: `flex`, alignItems: `center`, marginLeft: `-0.25rem` }}>
            <img src={logo} alt="Label Your Icons home" style={{ maxWidth: `60px`, marginBottom: `0`, marginRight: `1rem` }} />
            {siteTitle}
          </div>
        </Link>
      </h1>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
