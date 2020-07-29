import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Hero from "./hero";

class Layout extends React.Component {
  render() {
    const { location, title, hero, postTitle, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    let heroImage = !!hero ? <Hero fluid={hero} postTitle={postTitle} pageTitle={title} /> : null


    if (location.pathname === rootPath) {

        // Home Layout

      header = (
        <h1
          style={{
            ...scale(1.25),
            marginBottom: rhythm(1.25),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {

      //  Posts

      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: 0,
            ...scale(0.2),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }

    return (
    <div>
        {/*<div*/}
        {/*    style={{*/}
        {/*        marginLeft: `auto`,*/}
        {/*        marginRight: `auto`,*/}
        {/*        maxWidth: rhythm(36),*/}
        {/*        padding: rhythm(0.2),*/}
        {/*        flexDisplay: `column`,*/}
        {/*        justifyContent: `center`,*/}
        {/*        contentDisplay: `center`,*/}
        {/*        contentAlign: `center`,*/}
        {/*        selfAlign: `center`,*/}
        {/*        height: '10vh',*/}
        {/*    }}*/}
        {/*>*/}
        {/*</div>*/}
      <div>
          <cover>{heroImage}</cover>
      </div>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
          <header>{header}</header>
          <main>{children}</main>
        <footer>
           Noé Domínguez-Porras,
                CC BY-SA
                {` `}
                {new Date().getFullYear()}
        </footer>
      </div>
    </div>
    )
  }
}

export default Layout
