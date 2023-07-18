import {registry} from '@jahia/server-helpers';
import PageHome from '../components/jnt/page/page.home';
import HeroSection from '../components/solidReact/heroSection';

const reactView = registry.get('view', 'react');

registry.add('view', 'page_home', reactView, {
    target: 'jnt:page',
    remote: 'npm',
    component: PageHome,
    htmlRoot: true,
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
