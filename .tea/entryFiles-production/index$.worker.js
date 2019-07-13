
require('./config$');
require('./importScripts$');
function success() {
require('../..//app');
require('../../node_modules/mini-antui/es/list/index');
require('../../node_modules/mini-antui/es/list/list-item/index');
require('../../pages/index/index');
require('../../pages/tabs/tabs');
require('../../pages/cronopio/cronopio');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
