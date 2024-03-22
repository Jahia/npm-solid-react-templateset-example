import React from 'react';
import {useServerContext, getNodeProps, buildUrl } from '@jahia/js-server-engine';

export const CtaSection = () => {
    const {currentNode, renderContext, currentResource} = useServerContext();
    const props = getNodeProps(currentNode, ['text', 'ctaButtonLink', 'ctaButtonText']);
    return (
        <section className="cta section">
        <div className="container">
            <div className="cta-inner section-inner">
                <h3 className="section-title mt-0">{props.text}</h3>
                <div className="cta-cta">
                    <a className="button button-primary button-wide-mobile" href={props.ctaButtonLink ? buildUrl({path: props.ctaButtonLink.getPath()}, renderContext, currentResource) : '#'}>{props.ctaButtonText}</a>
                </div>
            </div>
        </div>
    </section>
    );
}

CtaSection.jahiaComponent = {
    nodeType: 'solidTemplate:ctaSection',
    displayName: 'Call to action section',
    componentType: 'view'
}