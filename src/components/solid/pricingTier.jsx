import React from 'react';
import { useServerContext } from '@jahia/server-jsx';

export default () => {
    const {currentResource} = useServerContext();

    const featureValues = currentResource.getNode().getProperty('feature').getValues();

    
    return (
        <div className="pricing-table">
            <div className="pricing-table-inner is-revealing">
                <div className="pricing-table-main">
                    <div className="pricing-table-header pb-24">
                        <div className="pricing-table-price"><span className="pricing-table-price-currency h2">$</span><span className="pricing-table-price-amount h1">{currentResource.getNode().getPropertyAsString('price')}</span></div>
                    </div>
                    <div className="pricing-table-features-title text-xs pt-24 pb-24">{currentResource.getNode().getPropertyAsString('featuresTitle')}</div>
                    <ul className="pricing-table-features list-reset text-xs">
                        {featureValues.map(feature => 
                            <li>
                                <span>{feature.getString()}</span>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="pricing-table-cta mb-8">
                    <a className="button button-primary button-shadow button-block" href="#">{currentResource.getNode().getPropertyAsString('pricingButtonText')}</a>
                </div>
            </div>
        </div>
    )
}