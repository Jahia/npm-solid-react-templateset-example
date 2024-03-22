import React from 'react';
import { Area, useServerContext, buildUrl } from '@jahia/js-server-engine';
import Header from '../../components/header';
import Footer from '../../components/footer';

export const PageHome = ({ currentNode, mainNode, currentLocale, user }) => {
    const {renderContext, currentResource} = useServerContext();
    const modulePath = renderContext.getURLGenerator().getCurrentModule();

    return (<>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <title>Solid Template</title>
            <style jsx>{css}</style>
            <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600" rel="stylesheet"></link>
            <script src="https://unpkg.com/animejs@3.0.1/lib/anime.min.js"></script>
            <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
        </head>
        <body className="is-boxed has-animations">
            <div className="body-wrap">
                <Header/>

                <main>
                    <Area name={'pagecontent'} />
                </main>

                <Footer/>
            </div>

            <script src={buildUrl({value: modulePath + "/javascript/main.min.js"}, renderContext, currentResource)}></script>
         </body>

    </>
    );
}

PageHome.jahiaComponent = {
    nodeType: 'jnt:page',
    name: 'home',
    displayName: 'Home React template',
    componentType: 'template'
}

let css = `
html {
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
}

body {
    margin: 0
}

article,
aside,
footer,
header,
nav,
section {
    display: block
}

h1 {
    font-size: 2em;
    margin: 0.67em 0
}

figcaption,
figure,
main {
    display: block
}

figure {
    margin: 1em 40px
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible
}

pre {
    font-family: monospace, monospace;
    font-size: 1em
}

a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects
}

abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted
}

b,
strong {
    font-weight: inherit
}

b,
strong {
    font-weight: bolder
}

code,
kbd,
samp {
    font-family: monospace, monospace;
    font-size: 1em
}

dfn {
    font-style: italic
}

mark {
    background-color: #ff0;
    color: #000
}

small {
    font-size: 80%
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

sub {
    bottom: -0.25em
}

sup {
    top: -0.5em
}

audio,
video {
    display: inline-block
}

audio:not([controls]) {
    display: none;
    height: 0
}

img {
    border-style: none
}

svg:not(:root) {
    overflow: hidden
}

button,
input,
optgroup,
select,
textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0
}

button,
input {
    overflow: visible
}

button,
select {
    text-transform: none
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
    -webkit-appearance: button
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText
}

fieldset {
    padding: 0.35em 0.75em 0.625em
}

legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal
}

progress {
    display: inline-block;
    vertical-align: baseline
}

textarea {
    overflow: auto
}

[type="checkbox"],
[type="radio"] {
    box-sizing: border-box;
    padding: 0
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto
}

[type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}

details,
menu {
    display: block
}

summary {
    display: list-item
}

canvas {
    display: inline-block
}

template {
    display: none
}

[hidden] {
    display: none
}

html {
    box-sizing: border-box
}

*,
*:before,
*:after {
    box-sizing: inherit
}

body {
    background: #1D2026;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased
}

hr {
    border: 0;
    display: block;
    height: 1px;
    background: #242830;
    margin-top: 24px;
    margin-bottom: 24px
}

ul,
ol {
    margin-top: 0;
    margin-bottom: 24px;
    padding-left: 24px
}

ul {
    list-style: disc
}

ol {
    list-style: decimal
}

li>ul,
li>ol {
    margin-bottom: 0
}

dl {
    margin-top: 0;
    margin-bottom: 24px
}

dt {
    font-weight: 600
}

dd {
    margin-left: 24px;
    margin-bottom: 24px
}

img {
    height: auto;
    max-width: 100%;
    vertical-align: middle
}

figure {
    margin: 24px 0
}

figcaption {
    font-size: 16px;
    line-height: 24px;
    padding: 8px 0
}

img,
svg {
    display: block
}

table {
    border-collapse: collapse;
    margin-bottom: 24px;
    width: 100%
}

tr {
    border-bottom: 1px solid #242830
}

th {
    text-align: left
}

th,
td {
    padding: 10px 16px
}

th:first-child,
td:first-child {
    padding-left: 0
}

th:last-child,
td:last-child {
    padding-right: 0
}

html {
    font-size: 20px;
    line-height: 30px
}

body {
    color: #8A94A7;
    font-size: 1rem
}

body,
button,
input,
select,
textarea {
    font-family: "IBM Plex Sans", sans-serif
}

a {
    color: #8A94A7;
    text-decoration: underline
}

a:hover,
a:active {
    outline: 0;
    text-decoration: none
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
    clear: both;
    color: #fff;
    font-weight: 600
}

h1,
.h1 {
    font-size: 38px;
    line-height: 48px;
    letter-spacing: 0px
}

@media (min-width: 641px) {

    h1,
    .h1 {
        font-size: 44px;
        line-height: 54px;
        letter-spacing: 0px
    }
}

h2,
.h2 {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0px
}

@media (min-width: 641px) {

    h2,
    .h2 {
        font-size: 38px;
        line-height: 48px;
        letter-spacing: 0px
    }
}

h3,
.h3,
blockquote {
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0px
}

@media (min-width: 641px) {

    h3,
    .h3,
    blockquote {
        font-size: 32px;
        line-height: 42px;
        letter-spacing: 0px
    }
}

h4,
h5,
h6,
.h4,
.h5,
.h6 {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.1px
}

@media (min-width: 641px) {

    h4,
    h5,
    h6,
    .h4,
    .h5,
    .h6 {
        font-size: 24px;
        line-height: 34px;
        letter-spacing: 0px
    }
}

@media (max-width: 640px) {
    .h1-mobile {
        font-size: 38px;
        line-height: 48px;
        letter-spacing: 0px
    }

    .h2-mobile {
        font-size: 32px;
        line-height: 42px;
        letter-spacing: 0px
    }

    .h3-mobile {
        font-size: 24px;
        line-height: 34px;
        letter-spacing: 0px
    }

    .h4-mobile,
    .h5-mobile,
    .h6-mobile {
        font-size: 20px;
        line-height: 30px;
        letter-spacing: -0.1px
    }
}

.text-light h1,
.text-light h2,
.text-light h3,
.text-light h4,
.text-light h5,
.text-light h6,
.text-light .h1,
.text-light .h2,
.text-light .h3,
.text-light .h4,
.text-light .h5,
.text-light .h6 {
    color: !important
}

.text-sm {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px
}

.text-xs {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.1px
}

h1,
h2,
.h1,
.h2 {
    margin-top: 48px;
    margin-bottom: 16px
}

h3,
.h3 {
    margin-top: 36px;
    margin-bottom: 12px
}

h4,
h5,
h6,
.h4,
.h5,
.h6 {
    margin-top: 24px;
    margin-bottom: 4px
}

p {
    margin-top: 0;
    margin-bottom: 24px
}

dfn,
cite,
em,
i {
    font-style: italic
}

blockquote {
    color: #3B404C;
    font-style: italic;
    margin-top: 24px;
    margin-bottom: 24px;
    margin-left: 24px
}

blockquote::before {
    content: "\x201C"
}

blockquote::after {
    content: "\x201D"
}

blockquote p {
    display: inline
}

address {
    color: #8A94A7;
    border-width: 1px 0;
    border-style: solid;
    border-color: #242830;
    padding: 24px 0;
    margin: 0 0 24px
}

pre,
pre h1,
pre h2,
pre h3,
pre h4,
pre h5,
pre h6,
pre .h1,
pre .h2,
pre .h3,
pre .h4,
pre .h5,
pre .h6 {
    font-family: "Courier 10 Pitch", Courier, monospace
}

pre,
code,
kbd,
tt,
var {
    background: #1D2026
}

pre {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 24px;
    margin-top: 24px;
    margin-bottom: 24px
}

code,
kbd,
tt,
var {
    font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
    font-size: 16px;
    padding: 2px 4px
}

abbr,
acronym {
    cursor: help
}

mark,
ins {
    text-decoration: none
}

small {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.1px
}

b,
strong {
    font-weight: 600
}

button,
input,
select,
textarea,
label {
    font-size: 20px;
    line-height: 30px
}

.container,
.container-sm {
    width: 100%;
    margin: 0 auto;
    padding-left: 16px;
    padding-right: 16px
}

@media (min-width: 481px) {

    .container,
    .container-sm {
        padding-left: 24px;
        padding-right: 24px
    }
}

.container {
    max-width: 1128px
}

.container-sm {
    max-width: 848px
}

.container .container-sm {
    max-width: 800px;
    padding-left: 0;
    padding-right: 0
}

.screen-reader-text {
    clip: rect(1px, 1px, 1px, 1px);
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    word-wrap: normal !important
}

.screen-reader-text:focus {
    border-radius: 2px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
    clip: auto !important;
    display: block;
    font-size: 14px;
    letter-spacing: 0px;
    font-weight: 600;
    line-height: 16px;
    text-decoration: none;
    text-transform: uppercase;
    background-color: #1D2026;
    color: #0270D7 !important;
    border: none;
    height: auto;
    left: 8px;
    padding: 16px 32px;
    top: 8px;
    width: auto;
    z-index: 100000
}

.list-reset {
    list-style: none;
    padding: 0
}

.text-left {
    text-align: left
}

.text-center {
    text-align: center
}

.text-right {
    text-align: right
}

.text-primary {
    color: #0270D7
}

.has-top-divider {
    position: relative
}

.has-top-divider::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    height: 1px;
    background: #242830
}

.has-bottom-divider {
    position: relative
}

.has-bottom-divider::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: block;
    height: 1px;
    background: #242830
}

.m-0 {
    margin: 0
}

.mt-0 {
    margin-top: 0
}

.mr-0 {
    margin-right: 0
}

.mb-0 {
    margin-bottom: 0
}

.ml-0 {
    margin-left: 0
}

.m-8 {
    margin: 8px
}

.mt-8 {
    margin-top: 8px
}

.mr-8 {
    margin-right: 8px
}

.mb-8 {
    margin-bottom: 8px
}

.ml-8 {
    margin-left: 8px
}

.m-16 {
    margin: 16px
}

.mt-16 {
    margin-top: 16px
}

.mr-16 {
    margin-right: 16px
}

.mb-16 {
    margin-bottom: 16px
}

.ml-16 {
    margin-left: 16px
}

.m-24 {
    margin: 24px
}

.mt-24 {
    margin-top: 24px
}

.mr-24 {
    margin-right: 24px
}

.mb-24 {
    margin-bottom: 24px
}

.ml-24 {
    margin-left: 24px
}

.m-32 {
    margin: 32px
}

.mt-32 {
    margin-top: 32px
}

.mr-32 {
    margin-right: 32px
}

.mb-32 {
    margin-bottom: 32px
}

.ml-32 {
    margin-left: 32px
}

.m-40 {
    margin: 40px
}

.mt-40 {
    margin-top: 40px
}

.mr-40 {
    margin-right: 40px
}

.mb-40 {
    margin-bottom: 40px
}

.ml-40 {
    margin-left: 40px
}

.m-48 {
    margin: 48px
}

.mt-48 {
    margin-top: 48px
}

.mr-48 {
    margin-right: 48px
}

.mb-48 {
    margin-bottom: 48px
}

.ml-48 {
    margin-left: 48px
}

.m-56 {
    margin: 56px
}

.mt-56 {
    margin-top: 56px
}

.mr-56 {
    margin-right: 56px
}

.mb-56 {
    margin-bottom: 56px
}

.ml-56 {
    margin-left: 56px
}

.m-64 {
    margin: 64px
}

.mt-64 {
    margin-top: 64px
}

.mr-64 {
    margin-right: 64px
}

.mb-64 {
    margin-bottom: 64px
}

.ml-64 {
    margin-left: 64px
}

.p-0 {
    padding: 0
}

.pt-0 {
    padding-top: 0
}

.pr-0 {
    padding-right: 0
}

.pb-0 {
    padding-bottom: 0
}

.pl-0 {
    padding-left: 0
}

.p-8 {
    padding: 8px
}

.pt-8 {
    padding-top: 8px
}

.pr-8 {
    padding-right: 8px
}

.pb-8 {
    padding-bottom: 8px
}

.pl-8 {
    padding-left: 8px
}

.p-16 {
    padding: 16px
}

.pt-16 {
    padding-top: 16px
}

.pr-16 {
    padding-right: 16px
}

.pb-16 {
    padding-bottom: 16px
}

.pl-16 {
    padding-left: 16px
}

.p-24 {
    padding: 24px
}

.pt-24 {
    padding-top: 24px
}

.pr-24 {
    padding-right: 24px
}

.pb-24 {
    padding-bottom: 24px
}

.pl-24 {
    padding-left: 24px
}

.p-32 {
    padding: 32px
}

.pt-32 {
    padding-top: 32px
}

.pr-32 {
    padding-right: 32px
}

.pb-32 {
    padding-bottom: 32px
}

.pl-32 {
    padding-left: 32px
}

.p-40 {
    padding: 40px
}

.pt-40 {
    padding-top: 40px
}

.pr-40 {
    padding-right: 40px
}

.pb-40 {
    padding-bottom: 40px
}

.pl-40 {
    padding-left: 40px
}

.p-48 {
    padding: 48px
}

.pt-48 {
    padding-top: 48px
}

.pr-48 {
    padding-right: 48px
}

.pb-48 {
    padding-bottom: 48px
}

.pl-48 {
    padding-left: 48px
}

.p-56 {
    padding: 56px
}

.pt-56 {
    padding-top: 56px
}

.pr-56 {
    padding-right: 56px
}

.pb-56 {
    padding-bottom: 56px
}

.pl-56 {
    padding-left: 56px
}

.p-64 {
    padding: 64px
}

.pt-64 {
    padding-top: 64px
}

.pr-64 {
    padding-right: 64px
}

.pb-64 {
    padding-bottom: 64px
}

.pl-64 {
    padding-left: 64px
}

.sr .has-animations .is-revealing {
    visibility: hidden
}

.has-animations .anime-element {
    visibility: hidden
}

.anime-ready .has-animations .anime-element {
    visibility: visible
}

.input,
.textarea {
    background-color: #fff;
    border-width: 1px;
    border-style: solid;
    border-color: #242830;
    border-radius: 2px;
    color: #8A94A7;
    max-width: 100%;
    width: 100%
}

.input::-moz-placeholder,
.textarea::-moz-placeholder {
    color: #3B404C
}

.input::placeholder,
.textarea::placeholder {
    color: #3B404C
}

.input::-ms-input-placeholder,
.textarea::-ms-input-placeholder {
    color: #3B404C
}

.input:-ms-input-placeholder,
.textarea:-ms-input-placeholder {
    color: #3B404C
}

.input:hover,
.textarea:hover {
    border-color: #191c21
}

.input:active,
.input:focus,
.textarea:active,
.textarea:focus {
    outline: none;
    border-color: #242830
}

.input[disabled],
.textarea[disabled] {
    cursor: not-allowed;
    background-color: #1D2026;
    border-color: #1D2026
}

.input {
    -moz-appearance: none;
    -webkit-appearance: none;
    font-size: 16px;
    letter-spacing: -0.1px;
    line-height: 20px;
    padding: 13px 16px;
    height: 48px;
    box-shadow: none
}

.input .inline-input {
    display: inline;
    width: auto
}

.textarea {
    display: block;
    min-width: 100%;
    resize: vertical
}

.textarea .inline-textarea {
    display: inline;
    width: auto
}

.field-grouped>.control:not(:last-child) {
    margin-bottom: 8px
}

@media (min-width: 641px) {
    .field-grouped {
        display: flex
    }

    .field-grouped>.control {
        flex-shrink: 0
    }

    .field-grouped>.control.control-expanded {
        flex-grow: 1;
        flex-shrink: 1
    }

    .field-grouped>.control:not(:last-child) {
        margin-bottom: 0;
        margin-right: 8px
    }
}

.button {
    display: inline-flex;
    font-size: 14px;
    letter-spacing: 0px;
    font-weight: 600;
    line-height: 16px;
    text-decoration: none !important;
    text-transform: uppercase;
    background-color: #242830;
    color: #fff !important;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    justify-content: center;
    padding: 16px 32px;
    height: 48px;
    text-align: center;
    white-space: nowrap
}

.button:hover {
    background: #262a33
}

.button:active {
    outline: 0
}

.button::before {
    border-radius: 2px
}

.button-sm {
    padding: 8px 24px;
    height: 32px
}

.button-primary {
    background: #097dea;
    background: linear-gradient(65deg, #0270D7 0, #0F8AFD 100%)
}

.button-primary:hover {
    background: #0982f4;
    background: linear-gradient(65deg, #0275e1 0, #198ffd 100%)
}

.button-block {
    display: flex
}

.button-block {
    display: flex;
    width: 100%
}

@media (max-width: 640px) {
    .button-wide-mobile {
        width: 100%;
        max-width: 280px
    }
}
.features-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-right: -32px;
    margin-left: -32px
}

.features-wrap:first-of-type {
    margin-top: -16px
}

.features-wrap:last-of-type {
    margin-bottom: -16px
}

.feature {
    padding: 16px 32px;
    width: 380px;
    max-width: 380px;
    flex-grow: 1
}

.feature-inner {
    height: 100%
}

.feature-icon {
    display: flex;
    justify-content: center
}

@media (min-width: 641px) {
    .features-wrap:first-of-type {
        margin-top: -24px
    }

    .features-wrap:last-of-type {
        margin-bottom: -24px
    }

    .feature {
        padding: 32px 32px
    }
}

.pricing-header {
    margin-bottom: 48px
}

.pricing-tables-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: -12px;
    margin-left: -12px
}

.pricing-tables-wrap:first-child {
    margin-top: -12px
}

.pricing-tables-wrap:last-child {
    margin-bottom: -12px
}

.pricing-table {
    position: relative;
    padding: 12px;
    width: 368px;
    max-width: 368px;
    flex-grow: 1
}

.pricing-table::before {
    content: '';
    position: absolute;
    left: 50%;
    width: 200%;
    max-width: 200%;
    height: 435px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    bottom: 18.8%;
    transform: translateX(-50%);
    background-image: url("../images/pricing-illustration.svg")
}

.pricing-table-header,
.pricing-table-features-title,
.pricing-table-features li {
    border-bottom: 1px solid rgba(138, 148, 167, 0.24)
}

.pricing-table-inner {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    background: #2C3039;
    padding: 24px;
    height: 100%
}

.pricing-table-inner>* {
    position: relative;
    width: 100%
}

.pricing-table-inner::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 0 24px 48px rgba(21, 24, 29, 0.24);
    mix-blend-mode: multiply
}

.pricing-table-price-currency {
    color: #8A94A7
}

.pricing-table-features-title {
    color: #fff;
    font-weight: 700
}

.pricing-table-features li {
    display: flex;
    align-items: center;
    padding: 14px 0
}

.pricing-table-features li::before {
    content: '';
    width: 16px;
    height: 12px;
    margin-right: 16px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUuNiA2LjRMMS42IDQgMCA1LjYgNS42IDEyIDE2IDEuNiAxNC40IDB6IiBmaWxsPSIjMDJDQkIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);
    background-repeat: no-repeat
}

.pricing-table-cta {
    align-self: flex-end
}

@media (min-width: 641px) {
    .pricing .section-paragraph {
        padding-left: 90px;
        padding-right: 90px
    }

    .pricing-header {
        margin-bottom: 52px
    }
}

.cta {
    text-align: center
}

.cta .section-inner {
    padding: 48px 16px
}

.cta .section-title {
    margin-bottom: 40px
}

.cta-inner {
    position: relative;
    background: #15181D;
    overflow: hidden
}

.cta-inner::before {
    content: '';
    position: absolute;
    right: 98px;
    top: -117px;
    width: 160px;
    height: 187px;
    background-image: url("../images/cta-illustration.svg");
    background-repeat: no-repeat
}

.cta-inner>* {
    position: relative
}

@media (min-width: 641px) {
    .cta {
        text-align: left
    }

    .cta .section-inner {
        padding: 64px 32px
    }

    .cta .section-title {
        margin-bottom: 0;
        padding-right: 24px
    }

    .cta-inner {
        display: flex;
        align-items: center;
        justify-content: space-between
    }
}

.is-boxed {
    background: #242830
}

.body-wrap {
    background: #1D2026;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh
}

.boxed-container {
    max-width: 1440px;
    margin: 0 auto;
    box-shadow: 0 24px 48px rgba(21, 24, 29, 0.24);
    mix-blend-mode: multiply;
    mix-blend-mode: normal
}

main {
    flex: 1 0 auto
}

.section-inner {
    position: relative;
    padding-top: 48px;
    padding-bottom: 48px
}

@media (min-width: 641px) {
    .section-inner {
        padding-top: 88px;
        padding-bottom: 88px
    }
}

.site-footer {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0px
}

.site-footer a {
    color: #8A94A7;
    text-decoration: none
}

.site-footer a:hover,
.site-footer a:active {
    text-decoration: underline
}

.site-footer-inner {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding-top: 48px;
    padding-bottom: 48px
}

.footer-brand,
.footer-links,
.footer-social-links,
.footer-copyright {
    flex: none;
    width: 100%;
    display: inline-flex;
    justify-content: center
}

.footer-brand,
.footer-links,
.footer-social-links {
    margin-bottom: 24px
}

.footer-social-links li {
    display: inline-flex
}

.footer-social-links li+li {
    margin-left: 16px
}

.footer-social-links li a {
    padding: 8px
}

.footer-links li+li {
    margin-left: 24px
}

@media (min-width: 641px) {
    .site-footer {
        margin-top: 20px
    }

    .site-footer-inner {
        justify-content: space-between;
        padding-top: 64px;
        padding-bottom: 64px
    }

    .footer-brand,
    .footer-links,
    .footer-social-links,
    .footer-copyright {
        flex: 50%
    }

    .footer-brand,
    .footer-copyright {
        justify-content: flex-start
    }

    .footer-links,
    .footer-social-links {
        justify-content: flex-end
    }

    .footer-links {
        order: 1;
        margin-bottom: 0
    }
`;