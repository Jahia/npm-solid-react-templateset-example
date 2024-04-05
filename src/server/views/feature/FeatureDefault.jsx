import React from 'react';
import {useServerContext, getNodeProps, buildUrl} from '@jahia/js-server-core';

export const FeatureDefault = () => {
    const {currentNode, renderContext, currentResource} = useServerContext();
    const props = getNodeProps(currentNode, ['icon', 'title', 'text']);
    return (
        <div className="feature text-center is-revealing">
            <div className="feature-inner">
                <div className="feature-icon">
                    {props.icon &&
                        <img srcSet={buildUrl({path:props.icon.getPath()}, renderContext, currentResource)} alt="Feature"/>
                    }
                </div>
                <h4 className="feature-title mt-24">{props.title}</h4>
                <p className="text-sm mb-0">{props.text}</p>
            </div>
        </div>
    )
}

FeatureDefault.jahiaComponent = {
    nodeType: 'solidTemplate:feature',
    displayName: 'Feature',
    componentType: 'view'
}
