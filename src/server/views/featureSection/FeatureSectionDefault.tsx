import {
  AddContentButtons,
  getChildNodes,
  jahiaComponent,
  Render,
} from "@jahia/javascript-modules-library";

jahiaComponent(
  {
    nodeType: "solidTemplate:featureSection",
    displayName: "Feature section",
    name: "default",
    componentType: "view",
  },
  (_, { currentNode }) => {
    const allChildren = getChildNodes(currentNode, -1);
    return (
      <section className="features section">
        <div className="container">
          <div className="features-inner section-inner has-bottom-divider">
            <div className="features-wrap">
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
