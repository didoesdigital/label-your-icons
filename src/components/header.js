import { Link } from "gatsby"
import logo from "../images/lyi-logo-circle.svg"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `radial-gradient(circle at 34%18%, #61234e 0, #401131 100%)`,
      paddingTop: `4.35rem`,
      paddingBottom: `4.35rem`
    }}
  >
    <nav className="mx-auto mw-1024 landing-page-section">
      <h1 style={{
        paddingLeft: `24px`,
        paddingRight: `24px`,
        margin: 0
      }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <div style={{ maxWidth: `650px`, display: `flex`, alignItems: `center`, marginLeft: `-0.25rem` }}>
            <img src={logo} alt="Label Your Icons home. " style={{ maxWidth: `60px`, marginBottom: `0`, marginRight: `1rem` }} />
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
