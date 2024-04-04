import * as jahiaTemplates from './templates';
import * as jahiaViews from './views';
import {registerJahiaComponents} from '@jahia/js-server-core';

registerJahiaComponents(jahiaTemplates);
registerJahiaComponents(jahiaViews);
