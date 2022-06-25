import React from "react"
import Layout from "../components/Layout"

export default function Newsletter() {
  return (
    <Layout
      title="Newsletter"
      description="Sign up for my newsletter."
      article={false}
    >
      <div className="content">
        <h1>Newsletter</h1>
        <p className="grey">Updated May 22, 2022</p>
        <p>
          If you enjoy what I write but wish that you didn't have to actually
          visit my blog to read it, fear not: like every other blogger, I now
          have a{" "}
          <a
            href="https://buttondown.email/juliariec"
            target="_blank"
            rel="noreferrer noopener"
          >
            newsletter
          </a>
          .
        </p>
        <p>
          If you sign up for it, you'll receive an email every month or two
          summarizing what I tend to update on my blog: new posts I've written,
          books that I've reviewed, and any significant changes in my life. (I
          also have a{" "}
          <a
            href="https://www.juliariec.com/rss.xml"
            target="_blank"
            rel="noreferrer noopener"
          >
            RSS feed
          </a>{" "}
          if that's more your style.)
        </p>
        <h2>Sign up</h2>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/juliariec"
          method="post"
          target="popupwindow"
          onSubmit={() =>
            window.open("https://buttondown.email/juliariec", "popupwindow")
          }
          className="newsletter-form"
          autoComplete="on"
        >
          <div className="block">
            <label htmlFor="first-name">Your first name: </label>
            <input
              id="first-name"
              type="text"
              name="metadata__first-name"
              autoComplete="given-name"
              required
            />
          </div>
          <div className="block">
            <label htmlFor="email-address">Your email: </label>
            <input
              id="email-address"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </div>
          <button type="submit" aria-label="Subscribe" className="block">
            Sign me up
          </button>
        </form>
        <br />
        <p>
          The newsletter is powered by{" "}
          <a
            href="https://buttondown.email"
            target="_blank"
            rel="noreferrer noopener"
          >
            Buttondown
          </a>
          .
        </p>
      </div>
    </Layout>
  )
}
