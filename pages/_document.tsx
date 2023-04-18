import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link className="rounded-lg " rel="icon" href="/assets/logo.png" /> */}

          <link
            href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
