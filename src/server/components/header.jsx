import React from 'react';
import {useServerContext, jUrl} from '@jahia/js-server-engine';

export default () => {
    const {renderContext} = useServerContext();
    const modulePath = renderContext.getURLGenerator().getCurrentModule();

return (<>
        <style jsx>{css}</style>
                <header className="site-header">
                    <div className="container">
                        <div className="site-header-inner">
                            <div className="brand header-brand">
                                <h1 className="m-0">
                                    <a href="#">
                                        <img className="header-logo-image" src={jUrl({value: modulePath + '/images/logo.svg'})} alt="Logo" />
                                    </a>
                                </h1>
                            </div>
                        </div>
                    </div>
                </header>
    </>
    );
}

let css = `
.site-header {
    padding: 24px 0
}

.site-header-inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center
}

.header-links {
    display: inline-flex
}

.header-links li {
    display: inline-flex
}

.header-links a:not(.button) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.1px;
    font-weight: 600;
    color: #8A94A7;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 16px;
    padding: 8px 24px
}

@media (min-width: 641px) {
    .site-header {
        position: relative
    }

    .site-header::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 700px;
        background: #242830;
        background: linear-gradient(80deg, rgba(36, 40, 48, 0.5) 0%, rgba(36, 40, 48, 0) 100%);
        transform-origin: 0;
        transform: skewY(-12deg)
    }
}
`;
