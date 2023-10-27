import {registry} from '@jahia/server-helpers';
import PageHome from './components/page.home';
import HeroSection from './components/solid/heroSection';
import FeatureSection from './components/solid/featureSection';
import Feature from './components/solid/feature';

const reactView = registry.get('view', 'react');

registry.add('view', 'page_home', reactView, {
    target: 'jnt:page',
    remote: 'npm',
    component: PageHome,
    templateName: 'home',
    templateType: 'html',
    displayName: 'Home React template',
    properties: {
        template: 'true'
    }
});

registry.add('view', 'heroSection', reactView, {
    target: 'solidReact:heroSection',
    component: HeroSection,
    templateName: 'default',
    templateType: 'html',
    displayName: 'Hero section'
});

registry.add('view', 'featureSection', reactView, {
    target: 'solidReact:featureSection',
    component: FeatureSection,
    templateName: 'default',
    templateType: 'html',
    displayName: 'Feature section'
});

registry.add('view', 'feature', reactView, {
    target: 'solidReact:feature',
    component: Feature,
    templateName: 'default',
    templateType: 'html',
    displayName: 'Feature'
});
