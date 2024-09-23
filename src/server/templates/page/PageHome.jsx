import React from 'react';
import {AddResources, buildUrl, useServerContext, Area, defineJahiaComponent} from '@jahia/js-server-core';

export const PageHome = () => {
    const {renderContext, currentResource} = useServerContext();
    const modulePath = renderContext.getURLGenerator().getCurrentModule();
    return (<>
        <head>
            <meta charSet="utf-8"/>
            <meta
                content="IE=edge"
                httpEquiv="X-UA-Compatible"
            />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <title>
                Solid Template
            </title>
            <link
                href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600"
                rel="stylesheet"
            />
            <AddResources type='css' resources='style.css'/>
            <script src="https://unpkg.com/animejs@3.0.1/lib/anime.min.js"/>
            <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"/>
            <style jsx>{css}</style>
        </head>
        <body className="is-boxed has-animations">
            <div className="body-wrap">
      <header className="site-header">
        <div className="container">
          <div className="site-header-inner">
            <div className="brand header-brand">
              <h1 className="m-0">
                <a href="#">
                  <img
                    alt="Logo"
                    className="header-logo-image"
                    src={buildUrl({ value: modulePath + '/images/logo.svg'}, renderContext, currentResource)}
                  />
                </a>
              </h1>
            </div>
          </div>
        </div>
      </header>
                <main>
                    <Area name={'pagecontent'} />
                </main>
      <footer className="site-footer">
        <div className="container">
          <div className="site-footer-inner">
            <div className="brand footer-brand">
              <a href="#">
                <img
                  alt="Logo"
                  className="header-logo-image"
                  src={buildUrl({ value: modulePath + '/images/logo.svg'}, renderContext, currentResource)}
                />
              </a>
            </div>
            <ul className="footer-links list-reset">
              <li>
                <a href="#">
                  Contact
                </a>
              </li>
              <li>
                <a href="#">
                  About us
                </a>
              </li>
              <li>
                <a href="#">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#">
                  Support
                </a>
              </li>
            </ul>
            <ul className="footer-social-links list-reset">
              <li>
                <a href="#">
                  <span className="screen-reader-text">
                    Facebook
                  </span>
                  <svg
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                      fill="#0270D7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="screen-reader-text">
                    Twitter
                  </span>
                  <svg
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                      fill="#0270D7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="screen-reader-text">
                    Google
                  </span>
                  <svg
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                      fill="#0270D7"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <div className="footer-copyright">
              © 2019 Solid, all rights reserved
            </div>
          </div>
        </div>
      </footer>
            </div>
    <AddResources type={'javascript'} resources='main.min.js' targetTag='body' />
         </body>
    </>);
}

PageHome.jahiaComponent = defineJahiaComponent({ // This object is used to register the template in Jahia
    nodeType: 'jnt:page', // The content node type the template applies to
    name: 'home', // The name of the template
    displayName: 'Home page', // The display name of the page template
    componentType: 'template' // the component type is set to template (as opposed to view component types)
});

let css = `
.kevan {
    : 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
}`;
