import React from 'react';
import {JRender, JAddContentButtons, useServerContext, getChildNodes, getNodeProps} from '@jahia/js-server-engine';

export const PricingSection = () => {
    const {currentNode} = useServerContext();
    const allChildren = getChildNodes(currentNode);
    const props = getNodeProps(currentNode, ['title', 'paragraph']);

    return (
        <section className="pricing section">
            <div className="container-sm">
                <div className="pricing-inner section-inner">
                    <div className="pricing-header text-center">
                        <h2 className="section-title mt-0">{props.title}</h2>
                        <p className="section-paragraph mb-0">{props.paragraph}</p>
                    </div>
                    <div className="pricing-tables-wrap">
                        {allChildren && allChildren.map(function(child, i) {
                            return <JRender path={child.getPath()} key={child.getIdentifier()} />;
                        })}
                    </div>
                    <JAddContentButtons />
                </div>
            </div>
        </section>
    )
}

PricingSection.jahiaComponent = {
    id: 'pricingSection',
    nodeType: 'solidReact:pricingSection',
    displayName: 'Pricing section',
    componentType: 'view'
}