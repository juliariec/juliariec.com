import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const About = () => (
  <Layout
    title="About"
    description="About Julia, the author of this blog."
    article={false}
  >
    <h1>About</h1>
    <p>
      I'm Julia. I work as a software developer in Toronto and I like to read,
      write, think, and learn.
    </p>
    <p>
      I've enjoyed blogging since I was in elementary school. It encourages me
      to clarify my own thoughts and share what I'm learning with others.
    </p>
    <p>
      If you're curious, you can also read more{" "}
      <Link to="/about-this-blog/">about this blog</Link>.
    </p>
    <h2>Contact</h2>
    <p>
      To contact me, please{" "}
      <a href="mailto:hello@juliariec.com">send me an email</a>. I'd love to
      hear from you.
    </p>
    <h2>Interests</h2>
    <h3>Reading</h3>
    <p>
      I read for insight and for fun. I especially enjoy family sagas and{" "}
      <a
        href="https://commoncog.com/blog/the-3-kinds-of-non-fiction-book/"
        rel="noreferrer noopener"
        target="_blank"
      >
        tree books
      </a>
      . My favourite novel is <em>East of Eden</em> by John Steinbeck, with{" "}
      <em>The Idiot</em> by Elif Batuman as a close second.
    </p>
    <p>
      You can check out my <Link to="/bookshelf/">bookshelf</Link> to read notes
      on books I've read, or visit my{" "}
      <a
        href="https://goodreads.com/juliariec"
        rel="noreferrer noopener"
        target="_blank"
      >
        Goodreads
      </a>{" "}
      profile to browse my lists.
    </p>
    <h3>Software Development</h3>
    <p>
      I currently work in web development. My experience lies mainly in
      JavaScript (React, Express.js, Node.js), SQL, PHP, and Python.
    </p>{" "}
    <p>
      I've learned the fundamentals of Java, Visual Basic for Applications
      (VBA), and ELM, but I haven't programmed in those languages in years. I've
      enjoyed trying my hand at Bootstrap, GraphQL, and WordPress through
      smaller projects and am working on becoming more proficient with those
      technologies.
    </p>
    <p>
      In the future, I'd like to learn a NoSQL database like MongoDB, a
      functional language like Haskell, and another flavour of CSS, like
      TailwindCSS. I'd also like to try out Linux and some Python scripting.
    </p>
    <h3>Knowledge Management</h3>
    <p>
      I'm also interested in knowledge management and recently set up a{" "}
      <Link to="/blog/my-notion-system/">Notion workspace</Link> to use as a
      productivity app slash{" "}
      <a
        href="https://fortelabs.co/blog/basboverview/"
        rel="noreferrer noopener"
        target="_blank"
      >
        second brain
      </a>
      .
    </p>
    <h3>Blogging</h3>
    <p>
      I read other blogs extensively, using{" "}
      <a href="https://feedly.com" rel="noreferrer noopener" target="_blank">
        Feedly
      </a>{" "}
      as my personal content dashboard and{" "}
      <a
        href="https://getpocket.com/"
        rel="noreferrer noopener"
        target="_blank"
      >
        Pocket
      </a>{" "}
      to save interesting posts for later.
    </p>
  </Layout>
)

export default About
