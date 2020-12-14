/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from "./header"
import "./layout.css"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
    {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
    <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
    <TransitionGroup
    // `component` prop에 `null`을 넘겨주지 않으면 `<div>`로 한단계 감싸집니다.
    component={null}>
    <CSSTransition
      // 현재 pathname을 key prop으로 넘겨주어
      // 페이지가 전환될 때 이전 페이지가 TransitionGroup에서 빠지고
      // 새 페이지가 들어온 것으로 간주되도록 합니다.
      key={location.pathname}
      // timeout prop으로 넘겨준 시간(ms 단위)에 따라 `status`가 변화합니다.
      timeout={{ enter: 300, exit: 0 }}
      >
      
      { status => (
        // 전환 상태(`status` 인자)는
        // `unmounted`, `exited`, `entering`, `entered`, `exiting`
        // 이렇게 들어오는데, Transition 엘리먼트가 아예 자식 목록에서 빠져버리면
        // `unmounted` 상태가 들어올 일이 없습니다.
        // 따라서 뒤쪽의 네가지 상태만 들어온다고 생각하면 됩니다.
  
    
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
        className={`page ${status}`} 
      >
        <main>{children}</main>
        <footer style={{
          marginBottom:`0`,
          position:`fixed`
        }}>
          © {new Date().getFullYear()}, Go to git
          {` `}
          <a style={{color:`white`}} href="https://github.com/ChoheeP">ChoheeP</a>
        </footer>
      </div>

      ) }
    </CSSTransition>
  </TransitionGroup>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
