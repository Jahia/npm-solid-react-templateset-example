import React from 'react';
import {Render, AddContentButtons, useServerContext, getChildNodes, defineJahiaComponent} from '@jahia/js-server-core';

export const FeatureSectionDefault = () => {
    const { currentNode } = useServerContext();
    const allChildren = getChildNodes(currentNode, -1);
    return (
        <section className="features section">
            <div className="container">
                <div className="features-inner section-inner has-bottom-divider">
                    <div className="features-wrap">
                        {allChildren && allChildren.map(child =>
                            <Render path={child.getPath()} key={child.getIdentifier()} />
                        )}
                    </div>
                    <AddContentButtons />
                </div>
            </div>
        </section>
    )
}

FeatureSectionDefault.jahiaComponent = defineJahiaComponent({
    nodeType: 'solidTemplate:featureSection',
    displayName: 'Feature section',
    name: 'Feature-section',
    componentType: 'view'
});

