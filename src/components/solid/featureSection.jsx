import React from 'react';
import {JRender, JCreateContentButtons, useServerContext} from '@jahia/server-jsx';

export default () => {
    const {currentResource} = useServerContext();

    const child = currentResource.getNode().getNodes();
    const childPaths = [];
    while (child.hasNext()) {
        childPaths.push(child.next().getPath());
    }

    return (
        <section className="features section">
            <div className="container">
                <div className="features-inner section-inner has-bottom-divider">
                    <div className="features-wrap">
                        {childPaths.map(function(childPath, i){
                            return <JRender path={childPath} key={i} />;
                        })}
                    </div>
                    <JCreateContentButtons />
                </div>
            </div>
        </section>
    )
}