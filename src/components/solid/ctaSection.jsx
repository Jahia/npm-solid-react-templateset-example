import React from 'react';
import {useServerContext} from '@jahia/server-jsx';

export const CtaSection = () => {
    const {currentResource} = useServerContext();
    return (
        <section className="cta section">
        <div className="container">
            <div className="cta-inner section-inner">
                <h3 className="section-title mt-0">{currentResource.getNode().getPropertyAsString('text')}</h3>
                <div className="cta-cta">
                    <a className="button button-primary button-wide-mobile" href={currentResource.getNode().getProperty('ctaButtonLink').getNode().getUrl()}>{currentResource.getNode().getPropertyAsString('ctaButtonText')}</a>
                </div>
            </div>
        </div>
    </section>
    );
}

CtaSection.jahiaComponent = {
    id: 'ctaSection',
    target: 'solidReact:ctaSection',
    displayName: 'Pricing tier'
}