import * as React from 'react';
import { container } from './layout.module.css';
import { Helmet } from "react-helmet";
import icon from '../../images/skullyfox.png';

const Layout = (props) => {
    const pageTitle = props.pageTitle;
    const children = props.children;
  return (
    <div className={container}>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{pageTitle}</title>
          <link rel='icon' type='image/png' href={icon} />
      </Helmet>
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout