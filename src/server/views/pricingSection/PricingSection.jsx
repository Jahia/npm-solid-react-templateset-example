import React from 'react';
import {Render, AddContentButtons, useServerContext, getChildNodes, getNodeProps} from '@jahia/js-server-engine';

export const PricingSection = () => {
    const {currentNode} = useServerContext();
    const allChildren = getChildNodes(currentNode, -1);
    const props = getNodeProps(currentNode, ['title', 'text']);

    return (
        <section className="pricing section">
            <div className="container-sm">
                <div className="pricing-inner section-inner">
                    <div className="pricing-header text-center">
                        <h2 className="section-title mt-0">{props.title}</h2>
                        <p className="section-paragraph mb-0">{props.text}</p>
                    </div>
                    <div className="pricing-tables-wrap">
                        {allChildren && allChildren.map(function(child, i) {
                            return <Render path={child.getPath()} key={child.getIdentifier()} />;
                        })}
                    </div>
                    <AddContentButtons />
                </div>
            </div>
        </section>
    )
}

PricingSection.jahiaComponent = {
    nodeType: 'solidTemplate:pricingSection',
    displayName: 'Pricing section',
    componentType: 'view'
}