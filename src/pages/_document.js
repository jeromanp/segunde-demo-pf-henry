<<<<<<< HEAD:pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
					<link rel="preconnect" href="https://fonts.googleapis.com"></link>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
					<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
					<link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet"></link>
        </Head>
        <body className="antialiased font-poppins">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
=======
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
>>>>>>> 6a7b4c98acb3e607fffc5613aef14c00aa234fa5:src/pages/_document.js
