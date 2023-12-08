import React from 'react';
import {useServerContext} from '@jahia/server-jsx';

export const Feature = () => {
    const {currentResource} = useServerContext();
    return (
        <div className="feature text-center is-revealing">
            <div className="feature-inner">
                <div className="feature-icon">
                    {currentResource.getNode().hasProperty('icon') &&
                        <img srcSet={currentResource.getNode().getProperty('icon').getNode().getUrl()} alt="Feature"/>
                    }
                </div>
                <h4 className="feature-title mt-24">{currentResource.getNode().getPropertyAsString('title')}</h4>
                <p className="text-sm mb-0">{currentResource.getNode().getPropertyAsString('text')}</p>
            </div>
        </div>
    )
}

Feature.jahiaComponent = {
    id: 'feature',
    target: 'solidReact:feature',
    displayName: 'Feature'
}