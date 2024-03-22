import React from 'react';
import {useServerContext, getNodeProps, jUrl} from '@jahia/js-server-engine';

export const Feature = () => {
    const {currentNode} = useServerContext();
    const props = getNodeProps(currentNode, ['icon', 'title', 'text']);
    return (
        <div className="feature text-center is-revealing">
            <div className="feature-inner">
                <div className="feature-icon">
                    {props.icon &&
                        <img srcSet={jUrl({path:props.icon.getPath()})} alt="Feature"/>
                    }
                </div>
                <h4 className="feature-title mt-24">{props.title}</h4>
                <p className="text-sm mb-0">{props.text}</p>
            </div>
        </div>
    )
}

Feature.jahiaComponent = {
    nodeType: 'solidTemplate:feature',
    displayName: 'Feature',
    componentType: 'view'
}