import React from 'react';
import {Render, AddContentButtons, useServerContext, getChildNodes} from '@jahia/js-server-engine';

export const FeatureSection = () => {
    const {currentNode} = useServerContext();
    const allChildren = getChildNodes(currentNode, -1);
    return (
        <section className="features section">
            <div className="container">
                <div className="features-inner section-inner has-bottom-divider">
                    <div className="features-wrap">
                        {allChildren && allChildren.map(function(child, i){
                            return <Render path={child.getPath()} key={child.getIdentifier()} />;
                        })}
                    </div>
                    <AddContentButtons />
                </div>
            </div>
        </section>
    )
}

FeatureSection.jahiaComponent = {
    nodeType: 'solidTemplate:featureSection',
    displayName: 'Feature section',
    componentType: 'view'
}