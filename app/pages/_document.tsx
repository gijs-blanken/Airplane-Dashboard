import {BlitzScript, Document, DocumentHead, Html, Main} from "blitz"
import React from "react";

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }

  render() {
    return (
      <Html lang="en">
        <DocumentHead/>
        <body>
        <Main/>
        <BlitzScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
