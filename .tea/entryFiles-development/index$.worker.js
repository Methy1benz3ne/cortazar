if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../..//app');
require('../../node_modules/mini-antui/es/list/index');
require('../../node_modules/mini-antui/es/list/list-item/index');
require('../../pages/index/index');
require('../../pages/tabs/tabs');
require('../../pages/cronopio/cronopio');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}