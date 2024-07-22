import React from 'react';
import {useServerContext, buildUrl, getNodeProps, defineJahiaComponent} from '@jahia/js-server-core';

export const HeroSectionDefault = () => {
    const {currentNode, renderContext, currentResource} = useServerContext();
    const props = getNodeProps(currentNode, ['title', 'paragraph', 'button1Text', 'button1Link', 'button2Text', 'button2Link']);

    return (
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
            <div className="hero-copy">
                        <h1 className="hero-title mt-0">{props.title}</h1>
                        <p className="hero-paragraph">{props.paragraph}</p>
                        <div className="hero-cta">
                            <a className="button button-primary" href={props.button1Link ? buildUrl({path:props.button1Link.getPath()}, renderContext, currentResource) : '#'}>{ props.button1Text }</a>
                            <a className="button" href={props.button2Link ? buildUrl({path:props.button2Link.getPath()}, renderContext, currentResource) : '#'}>{props.button2Text}</a>
                        </div>
                    </div>
              <div className="hero-figure anime-element">
                <svg
                  className="placeholder"
                  height="396"
                  viewBox="0 0 528 396"
                  width="528"
                >
                  <rect
                    height="396"
                    style={{
                      fill: 'transparent'
                    }}
                    width="528"
                  />
                </svg>
                <div
                  className="hero-figure-box hero-figure-box-01"
                  data-rotation="45deg"
                />
                <div
                  className="hero-figure-box hero-figure-box-02"
                  data-rotation="-45deg"
                />
                <div
                  className="hero-figure-box hero-figure-box-03"
                  data-rotation="0deg"
                />
                <div
                  className="hero-figure-box hero-figure-box-04"
                  data-rotation="-135deg"
                />
                <div className="hero-figure-box hero-figure-box-05" />
                <div className="hero-figure-box hero-figure-box-06" />
                <div className="hero-figure-box hero-figure-box-07" />
                <div
                  className="hero-figure-box hero-figure-box-08"
                  data-rotation="-22deg"
                />
                <div
                  className="hero-figure-box hero-figure-box-09"
                  data-rotation="-52deg"
                />
                <div
                  className="hero-figure-box hero-figure-box-10"
                  data-rotation="-50deg"
                />
              </div>
            </div>
          </div>
        </section>        
    );
}

HeroSectionDefault.jahiaComponent = defineJahiaComponent({ // this object is used to register the view in Jahia
  nodeType: 'solidTemplate:heroSection', // The content node type the template applies to
  displayName: 'Hero Section', // The display name of the view
  componentType: 'view' // the component type is set to view (as opposed to template component types)
});

