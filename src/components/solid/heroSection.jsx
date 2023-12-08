import React from 'react';
import {useQuery, useServerContext} from '@jahia/server-jsx';
import {gql} from '@apollo/client';
import {print} from 'graphql';

export const HeroSection = () => {
    const {currentResource} = useServerContext();
    const {data, error} = useQuery({
        query: print(gql`
                query ($path: String!, $language: String) {
                    jcr {
                        nodeByPath(path: $path) {
                            title: property(name: "jcr:title", language: $language) { value }
                            paragraph: property(name: "paragraph", language: $language) { value }
                            button1Text: property(name: "button1Text", language: $language) { value }
                            button2Text: property(name: "button2Text", language: $language) { value }
                        }
                    }
                }
            `),
        variables: {
            path: currentResource.getNode().getPath(),
            language: 'en',
        }
    });

    return (<>
        <style jsx>{css}</style>
        <section className="hero">
            <div className="container">
                <div className="hero-inner">
                    <div className="hero-copy">
                        <h1 className="hero-title mt-0">{data && data.jcr.nodeByPath.title.value}</h1>
                        <p className="hero-paragraph">{data && data.jcr.nodeByPath.paragraph.value}</p>
                        <div className="hero-cta">
                            <a className="button button-primary">{ data && data.jcr.nodeByPath.button1Text.value}</a>
                            <a className="button">{data && data.jcr.nodeByPath.button1Text.value}</a>
                        </div>
                    </div>
                    <div className="hero-figure anime-element">
                        <svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
                            <rect width="528" height="396" style={{ fill: "transparent" }} />
                        </svg>
                        <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
                        <div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
                        <div className="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
                        <div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
                        <div className="hero-figure-box hero-figure-box-05"></div>
                        <div className="hero-figure-box hero-figure-box-06"></div>
                        <div className="hero-figure-box hero-figure-box-07"></div>
                        <div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
                        <div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
                        <div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

HeroSection.jahiaComponent = {
    id: 'heroSection',
    target: 'solidReact:heroSection',
    displayName: 'Hero section'
}

let css = `
.hero {
    text-align: center;
    padding-top: 48px;
    padding-bottom: 88px
}

.hero-copy {
    position: relative;
    z-index: 1
}

.hero-cta {
    margin-bottom: 40px
}

.hero-figure {
    position: relative
}

.hero-figure svg {
    width: 100%;
    height: auto
}

.hero-figure::before,
.hero-figure::after {
    content: '';
    position: absolute;
    background-repeat: no-repeat;
    background-size: 100%
}

.has-animations .hero-figure::before,
.has-animations .hero-figure::after {
    opacity: 0;
    transition: opacity 2s ease
}

.anime-ready .has-animations .hero-figure::before,
.anime-ready .has-animations .hero-figure::after {
    opacity: 1
}

.hero-figure::before {
    top: -57.8%;
    left: -1.3%;
    width: 152.84%;
    height: 178.78%;
    background-image: url("/modules/npm-solid-react-templateset/images/hero-back-illustration.svg")
}

.hero-figure::after {
    top: -35.6%;
    left: 99.6%;
    width: 57.2%;
    height: 87.88%;
    background-image: url("/modules/npm-solid-react-templateset/images/hero-top-illustration.svg")
}

.hero-figure-box {
    position: absolute;
    top: 0;
    will-change: transform
}

.hero-figure-box-01,
.hero-figure-box-02,
.hero-figure-box-03,
.hero-figure-box-04,
.hero-figure-box-08,
.hero-figure-box-09 {
    overflow: hidden
}

.hero-figure-box-01::before,
.hero-figure-box-02::before,
.hero-figure-box-03::before,
.hero-figure-box-04::before,
.hero-figure-box-08::before,
.hero-figure-box-09::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform-origin: 100% 100%
}

.hero-figure-box-01 {
    left: 103.2%;
    top: 41.9%;
    width: 28.03%;
    height: 37.37%;
    background: linear-gradient(to left top, #00BFFB, rgba(0, 191, 251, 0));
    transform: rotateZ(45deg)
}

.hero-figure-box-01::before {
    background: linear-gradient(to left, #15181D 0%, rgba(21, 24, 29, 0) 60%);
    transform: rotateZ(45deg) scale(1.5)
}

.hero-figure-box-02 {
    left: 61.3%;
    top: 64.1%;
    width: 37.87%;
    height: 50.50%;
    background: linear-gradient(to left top, #0270D7, rgba(2, 112, 215, 0));
    transform: rotateZ(-45deg)
}

.hero-figure-box-02::before {
    background: linear-gradient(to top, #15181D 0%, rgba(21, 24, 29, 0) 60%);
    transform: rotateZ(-45deg) scale(1.5)
}

.hero-figure-box-03 {
    left: 87.7%;
    top: -56.8%;
    width: 56.81%;
    height: 75.75%;
    background: linear-gradient(to left top, #00BFFB, rgba(0, 191, 251, 0))
}

.hero-figure-box-03::before {
    background: linear-gradient(to left, #15181D 0%, rgba(21, 24, 29, 0) 60%);
    transform: rotateZ(45deg) scale(1.5)
}

.hero-figure-box-04 {
    left: 54.9%;
    top: -8%;
    width: 45.45%;
    height: 60.60%;
    background: linear-gradient(to left top, #0270D7, rgba(2, 112, 215, 0));
    transform: rotateZ(-135deg)
}

.hero-figure-box-04::before {
    background: linear-gradient(to top, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 60%);
    transform: rotateZ(-45deg) scale(1.5)
}

.hero-figure-box-05,
.hero-figure-box-06,
.hero-figure-box-07 {
    background-color: #242830;
    box-shadow: -20px 32px 64px rgba(0, 0, 0, 0.25)
}

.hero-figure-box-05 {
    left: 17.4%;
    top: 13.3%;
    width: 64%;
    height: 73.7%;
    transform: perspective(500px) rotateY(-15deg) rotateX(8deg) rotateZ(-1deg)
}

.hero-figure-box-06 {
    left: 65.5%;
    top: 6.3%;
    width: 30.3%;
    height: 40.4%;
    transform: rotateZ(20deg)
}

.hero-figure-box-07 {
    left: 1.9%;
    top: 42.4%;
    width: 12.12%;
    height: 16.16%;
    transform: rotateZ(20deg)
}

.hero-figure-box-08 {
    left: 27.1%;
    top: 81.6%;
    width: 19.51%;
    height: 26.01%;
    background: #0270D7;
    transform: rotateZ(-22deg)
}

.hero-figure-box-08::before {
    background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.48) 100%);
    transform: rotateZ(45deg) scale(1.5)
}

.hero-figure-box-09 {
    left: 42.6%;
    top: -17.9%;
    width: 6.63%;
    height: 8.83%;
    background: #00BFFB;
    transform: rotateZ(-52deg)
}

.hero-figure-box-09::before {
    background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.64) 100%);
    transform: rotateZ(45deg) scale(1.5)
}

.hero-figure-box-10 {
    left: -3.8%;
    top: 4.3%;
    width: 3.03%;
    height: 4.04%;
    background: rgba(0, 191, 251, 0.32);
    transform: rotateZ(-50deg)
}

@media (max-width: 640px) {
    .hero-cta {
        max-width: 280px;
        margin-left: auto;
        margin-right: auto
    }

    .hero-cta .button {
        display: flex
    }

    .hero-cta .button+.button {
        margin-top: 16px
    }

    .hero-figure::after,
    .hero-figure-box-03,
    .hero-figure-box-04,
    .hero-figure-box-09 {
        display: none
    }
}

@media (min-width: 641px) {
    .hero {
        text-align: left;
        padding-top: 64px;
        padding-bottom: 88px
    }

    .hero-inner {
        display: flex;
        justify-content: space-between;
        align-items: center
    }

    .hero-copy {
        padding-right: 64px;
        min-width: 552px;
        width: 552px
    }

    .hero-cta {
        margin: 0
    }

    .hero-cta .button {
        min-width: 170px
    }

    .hero-cta .button:first-child {
        margin-right: 16px
    }

    .hero-figure svg {
        width: auto
    }
}`;