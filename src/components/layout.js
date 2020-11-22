import React from "react"
import { GradientBackground } from "./background"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <GradientBackground />
      <Header />
      <div className="base">
        {children}
        <footer>© {new Date().getFullYear()}, Built with Gatsby</footer>
      </div>
    </>
  )
}

export default Layout
