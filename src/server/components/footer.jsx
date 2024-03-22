import React from 'react';
import {useServerContext, jUrl} from '@jahia/js-server-engine';

export default () => {
    const {renderContext} = useServerContext();
    const modulePath = renderContext.getURLGenerator().getCurrentModule();

    return (<>
        <style jsx>{css}</style>
                <footer className="site-footer">
                    <div className="container">
                        <div className="site-footer-inner">
                            <div className="brand footer-brand">
                                <a href="#">
                                    <img className="header-logo-image" src={jUrl({value: modulePath + '/images/logo.svg'})} alt="Logo" />
                                </a>
                            </div>
                            <ul className="footer-links list-reset">
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">About us</a>
                                </li>
                                <li>
                                    <a href="#">FAQ's</a>
                                </li>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                            </ul>
                            <ul className="footer-social-links list-reset">
                                <li>
                                    <a href="#">
                                        <span className="screen-reader-text">Facebook</span>
                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#0270D7" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="screen-reader-text">Twitter</span>
                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#0270D7" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="screen-reader-text">Google</span>
                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#0270D7" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <div className="footer-copyright">&copy; 2019 Solid, all rights reserved</div>
                        </div>
                    </div>
                </footer>
    </>
    );
}

let css = `

.site-footer {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0px
}

.site-footer a {
    color: #8A94A7;
    text-decoration: none
}

.site-footer a:hover,
.site-footer a:active {
    text-decoration: underline
}

.site-footer-inner {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding-top: 48px;
    padding-bottom: 48px
}

.footer-brand,
.footer-links,
.footer-social-links,
.footer-copyright {
    flex: none;
    width: 100%;
    display: inline-flex;
    justify-content: center
}

.footer-brand,
.footer-links,
.footer-social-links {
    margin-bottom: 24px
}

.footer-social-links li {
    display: inline-flex
}

.footer-social-links li+li {
    margin-left: 16px
}

.footer-social-links li a {
    padding: 8px
}

.footer-links li+li {
    margin-left: 24px
}

@media (min-width: 641px) {
    .site-footer {
        margin-top: 20px
    }

    .site-footer-inner {
        justify-content: space-between;
        padding-top: 64px;
        padding-bottom: 64px
    }

    .footer-brand,
    .footer-links,
    .footer-social-links,
    .footer-copyright {
        flex: 50%
    }

    .footer-brand,
    .footer-copyright {
        justify-content: flex-start
    }

    .footer-links,
    .footer-social-links {
        justify-content: flex-end
    }

    .footer-links {
        order: 1;
        margin-bottom: 0
    }
}
`;
