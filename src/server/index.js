import * as jahiaTemplates from './templates';
import * as jahiaViews from './views';
import {registerJahiaComponents} from '@jahia/js-server-engine';

registerJahiaComponents(jahiaTemplates);
registerJahiaComponents(jahiaViews);
