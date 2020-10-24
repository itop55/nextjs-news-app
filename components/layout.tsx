import Head from 'next/head'
import Links from "./links"

type Props = {
  children: any;
  title: string;
}

export default function Layout({ children, title = 'News app' }:Props) {
  return (
      <>
        <Head>
          <title>{title}</title>
          <meta charSet="UTF-8" />
          <meta name="keywords" content="news,news-app" />
          <meta name="description" content="Новостной портал" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <header className="navbar-wrap">
          <nav className="container main-navbar">
            <Links />
          </nav>
        </header>
        <main className="container main-wrap">
          {children}
        </main>
      </>
  )
}