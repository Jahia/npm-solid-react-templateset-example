import {
  jahiaComponent,
  useUrlBuilder,
} from "@jahia/javascript-modules-library";
import { Item } from "javax.jcr";

jahiaComponent(
  {
    nodeType: "solidTemplate:ctaSection",
    displayName: "Call to action section",
    componentType: "view",
    name: "default",
  },
  ({
    text,
    ctaButtonLink,
    ctaButtonText,
  }: {
    text: string;
    ctaButtonLink: Item;
    ctaButtonText: string;
  }) => {
    const { buildNodeUrl } = useUrlBuilder();
    return (
      <section className="cta section">
        <div className="container">
          <div className="cta-inner section-inner">
            <h3 className="section-title mt-0">{text}</h3>
            <div className="cta-cta">
              <a
                className="button button-primary button-wide-mobile"
                href={
                  ctaButtonLink
                    ? buildNodeUrl({ nodePath: ctaButtonLink.getPath() })
                    : "#"
                }
              >
                {ctaButtonText}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  },
);
