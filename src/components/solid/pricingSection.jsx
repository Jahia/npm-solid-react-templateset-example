import React from 'react';
import {JRender, JCreateContentButtons, useServerContext} from '@jahia/server-jsx';


export default () => {
    const {currentResource} = useServerContext();

    const child = currentResource.getNode().getNodes();
    const childPaths = [];
    while(child.hasNext()) {
        childPaths.push(child.next().getPath());
    }

    return (
        <section className="pricing section">
            <div className="container-sm">
                <div className="pricing-inner section-inner">
                    <div className="pricing-header text-center">
                        <h2 className="section-title mt-0">Unlimited for all</h2>
                        <p className="section-paragraph mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.</p>
                    </div>
                    <div className="pricing-tables-wrap">
                        {childPaths.map(function(childPath, i) {
                            return <JRender path={childPath} key={i} />;
                        })}
                    </div>
                    <JCreateContentButtons />
                </div>
            </div>
        </section>
    )
}