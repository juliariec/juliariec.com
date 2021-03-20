import React from "react"
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
      think, write, and learn.
    </p>
    <p>
      I've blogged since I was in elementary school. It encourages me to share
      what I'm learning with others and to clarify my own thoughts.
    </p>

    <h2>Contact</h2>
    <p>
      To contact me, please send me an
      <a href="mailto:juliariec@gmail.com"> email</a>. I'd love to hear from
      you.
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
      .{" "}
    </p>
    <p>
      {" "}
      I'm planning to include a Bookshelf page on this site to share what I'm
      reading &mdash; for now, you can visit my{" "}
      <a
        href="https://goodreads.com/juliariec"
        rel="noreferrer noopener"
        target="_blank"
      >
        Goodreads
      </a>{" "}
      profile.
    </p>
    <p>
      I also read other blogs extensively, using{" "}
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

    <h3>Software</h3>
    <p>
      I currently work in web development. My experience lies mainly in modern
      JavaScript, React, PHP, Python, Java, and SQL. I've enjoyed trying my hand
      at Bootstrap, GraphQL, WordPress, and NodeJS through smaller projects.
    </p>
    <p>
      At the moment, I'm most interested in learning a NoSQL database like
      MongoDB, a functional language like Haskell, and more advanced CSS like
      SASS and TailwindCSS. I'd also like to try out Linux and some scripting.
    </p>
    <p>
      I recently set up a{" "}
      <a href="https://notion.so" rel="noreferrer noopener" target="_blank">
        Notion
      </a>{" "}
      workspace to use as a productivity app slash{" "}
      <a
        href="https://fortelabs.co/blog/basboverview/"
        rel="noreferrer noopener"
        target="_blank"
      >
        second brain
      </a>
      .
    </p>
  </Layout>
)

export default About
