import React from 'react';
import {JRender, JAddContentButtons, useServerContext, getChildNodes} from '@jahia/js-server-engine';

export const FeatureSection = () => {
    const {currentNode} = useServerContext();
    const allChildren = getChildNodes(currentNode);
    return (
        <section className="features section">
            <div className="container">
                <div className="features-inner section-inner has-bottom-divider">
                    <div className="features-wrap">
                        {allChildren && allChildren.map(function(child, i){
                            return <JRender path={child.getPath()} key={child.getIdentifier()} />;
                        })}
                    </div>
                    <JAddContentButtons />
                </div>
            </div>
        </section>
    )
}

FeatureSection.jahiaComponent = {
    id: 'featureSection',
    nodeType: 'solidReact:featureSection',
    displayName: 'Feature section',
    componentType: 'view'
}