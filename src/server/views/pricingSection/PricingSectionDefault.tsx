import {
  AddContentButtons,
  getChildNodes,
  jahiaComponent,
  Render,
} from "@jahia/javascript-modules-library";

jahiaComponent(
  {
    nodeType: "solidTemplate:pricingSection",
    displayName: "Pricing section",
    componentType: "view",
    name: "default",
  },
  ({ title, paragraph }, { currentNode }) => {
    const allChildren = getChildNodes(currentNode, -1);

    return (
      <section className="pricing section">
        <div className="container-sm">
          <div className="pricing-inner section-inner">
            <div className="pricing-header text-center">
              <h2 className="section-title mt-0">{title}</h2>
              <p className="section-paragraph mb-0">{paragraph}</p>
            </div>
            <div className="pricing-tables-wrap">
              {allChildren &&
                allChildren.map((child) => (
                  <Render path={child.getPath()} key={child.getIdentifier()} />
                ))}
            </div>
            <AddContentButtons />
          </div>
        </div>
      </section>
    );
  },
);
