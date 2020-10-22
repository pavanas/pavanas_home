import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div></div>
    <p>
      Hi! I'm Anastasios but you can call me
      {` `}
      <span class="shortname letter">T</span>
      <span class="shortname letter">a</span>
      <span class="shortname letter">s</span>
      <span class="shortname letter">s</span>! 
    </p>
      I'm the typical Greek guy that likes to talk loud, meet new people and enjoy good food &#x1F600;
    <p>  
      I'm a Senior developer with 10 years of proffesional experience and a constant strive to try and learn new things.
    </p>
    <p>
      You can have a look on the technologies and tools I use <span>HERE</span>.
    </p>
    <p>
      You can find more information about my professional career on <a class="highlight lin" href="">linkedin</a>, follow me on <a href="twitter" class="highlight tw">twitter</a> or spend some time reading my opinions <a href="hackernoon" class="highlight hn">HERE</a>.
    </p>
    If you feel like it, drop me a line :)
  </Layout>
)

export default IndexPage
