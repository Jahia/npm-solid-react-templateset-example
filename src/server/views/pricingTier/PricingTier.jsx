import React from 'react';
import { useServerContext, getNodeProps, jUrl } from '@jahia/js-server-engine';

export const PricingTier = () => {
    const {currentNode} = useServerContext();
    const props = getNodeProps(currentNode, ['featuresTitle', 'feature', 'price', 'pricingButtonText', 'pricingButtonLink']);
    
    return (
        <div className="pricing-table">
            <div className="pricing-table-inner is-revealing">
                <div className="pricing-table-main">
                    <div className="pricing-table-header pb-24">
                        <div className="pricing-table-price"><span className="pricing-table-price-currency h2">$</span><span className="pricing-table-price-amount h1">{props.price}</span></div>
                    </div>
                    <div className="pricing-table-features-title text-xs pt-24 pb-24">{props.featuresTitle}</div>
                    <ul className="pricing-table-features list-reset text-xs">
                        {props.feature.map(value => 
                            <li key={value}>
                                <span>{value}</span>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="pricing-table-cta mb-8">
                    <a className="button button-primary button-shadow button-block" href={props.pricingButtonLink ? jUrl({path:props.pricingButtonLink.getPath()}) : '#'}>{props.pricingButtonText}</a>
                </div>
            </div>
        </div>
    )
}

PricingTier.jahiaComponent = {
    nodeType: 'solidTemplate:pricingTier',
    displayName: 'Pricing tier',
    componentType: 'view'
}