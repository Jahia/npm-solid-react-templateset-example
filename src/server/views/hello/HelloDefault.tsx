import { jahiaComponent } from "@jahia/javascript-modules-library";

jahiaComponent(
  // this object is used to register the view in Jahia
  {
    nodeType: "solidTemplate:hello", // The content node type the template applies to
    displayName: "Hello (default)", // The display name of the view
    name: "default", // The display name of the view
    componentType: "view", // the component type is set to view (as opposed to template component types)
  },
  ({ textHello }) => (
    <div>
      <h2>{textHello}</h2>
    </div>
  ),
);
