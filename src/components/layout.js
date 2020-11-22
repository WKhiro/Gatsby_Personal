import React from "react"
import Xd from "./background"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Xd />
      <Header />
      <div className="base">
        {children}
        <footer>© {new Date().getFullYear()}, Built with Gatsby</footer>
      </div>
    </>
  )
}

export default Layout
