import React from "react"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Container className="text-center">
        This is my personal website. I either linked you here myself, or you got
        here via my GitHub. Either way, you can learn more about me by reading
        the section to the right, or by looking at my blog or projects page.
      </Container>
    </Layout>
  )
}
