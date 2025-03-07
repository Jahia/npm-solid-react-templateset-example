import {
  jahiaComponent,
  useUrlBuilder,
} from "@jahia/javascript-modules-library";
import { Item } from "javax.jcr";

jahiaComponent(
  {
    nodeType: "solidTemplate:pricingTier",
    displayName: "Pricing tier",
    componentType: "view",
    name: "default",
  },
  ({
    featuresTitle,
    feature,
    price,
    pricingButtonText,
    pricingButtonLink,
  }: {
    featuresTitle: string;
    feature: string[];
    price: string;
    pricingButtonText: string;
    pricingButtonLink: Item;
  }) => {
    const { buildNodeUrl } = useUrlBuilder();
    return (
      <div className="pricing-table">
        <div className="pricing-table-inner is-revealing">
          <div className="pricing-table-main">
            <div className="pricing-table-header pb-24">
              <div className="pricing-table-price">
                <span className="pricing-table-price-currency h2">$</span>
                <span className="pricing-table-price-amount h1">{price}</span>
              </div>
            </div>
            <div className="pricing-table-features-title text-xs pt-24 pb-24">
              {featuresTitle}
            </div>
            <ul className="pricing-table-features list-reset text-xs">
              {feature.map((value) => (
                <li key={value}>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pricing-table-cta mb-8">
            <a
              className="button button-primary button-shadow button-block"
              href={
                pricingButtonLink
                  ? buildNodeUrl({ nodePath: pricingButtonLink.getPath() })
                  : "#"
              }
            >
              {pricingButtonText}
            </a>
          </div>
        </div>
      </div>
    );
  },
);
