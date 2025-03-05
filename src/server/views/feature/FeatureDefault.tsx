import {
  jahiaComponent,
  useUrlBuilder,
} from "@jahia/javascript-modules-library";
import { Item } from "javax.jcr";

jahiaComponent(
  {
    nodeType: "solidTemplate:feature",
    displayName: "Feature",
    name: "default",
    componentType: "view",
  },
  ({ icon, title, text }: { icon: Item; title: string; text: string }) => {
    const { buildNodeUrl } = useUrlBuilder();
    return (
      <div className="feature text-center is-revealing">
        <div className="feature-inner">
          <div className="feature-icon">
            {icon && (
              <img
                srcSet={buildNodeUrl({ nodePath: icon.getPath() })}
                alt="Feature"
              />
            )}
          </div>
          <h4 className="feature-title mt-24">{title}</h4>
          <p className="text-sm mb-0">{text}</p>
        </div>
      </div>
    );
  },
);
