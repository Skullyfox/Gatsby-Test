import * as React from 'react';
import { container } from './layout.module.css';
import { Helmet } from "react-helmet";
import icon from '../../images/skullyfox.png';

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
      </Helmet>
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout