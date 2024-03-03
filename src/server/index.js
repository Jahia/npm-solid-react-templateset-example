import * as jahiaViews from './views';
import * as jahiaTemplates from './templates';
import {registerJahiaComponents} from '@jahia/js-server-engine';

registerJahiaComponents(jahiaViews);
registerJahiaComponents(jahiaTemplates);
