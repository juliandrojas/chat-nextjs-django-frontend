export const metadata = {
  title: "Chat - APP",
  icons: {
    icon: "img/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>CHAT-APP</title>
        {/* <!-- Required meta tags --> */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* <!-- Bootstrap CSS v5.2.1 --> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        {children}
      </body>
    </html>

  )
}
