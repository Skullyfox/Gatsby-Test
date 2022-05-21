import * as React from 'react';
import { container, main } from './layout.module.css';
import { Helmet } from "react-helmet";
import icon from '../../images/skullyfox.png';
import miniature from '../../images/miniature.jpg';

const Layout = (props) => {
    const pageTitle = props.pageTitle;
    const children = props.children;
    const description = props.description;
    const author = `Skullyfox`;
  return (
    <div className={container}>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{pageTitle}</title>
          <link rel='icon' type='image/png' href={icon} />
          <meta name="author" content={author} />
          <meta name="description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://skullyfox-tv.fr/" />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={miniature} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://skullyfox-tv.fr/" />
          <meta property="twitter:title" content={pageTitle} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content={miniature} />
      </Helmet>
      <main className={main}>
        {children}
      </main>
    </div>
  )
}
export default Layout