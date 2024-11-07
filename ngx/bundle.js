'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var SDDBarcodeScanner = /** @class */ (function (_super) {
    tslib.__extends(SDDBarcodeScanner, _super);
    function SDDBarcodeScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SDDBarcodeScanner.prototype.startCameraScan = function () { return core.cordova(this, "startCameraScan", {}, arguments); };
    SDDBarcodeScanner.prototype.isCameraReady = function () { return core.cordova(this, "isCameraReady", {}, arguments); };
    SDDBarcodeScanner.prototype.cameraUnbind = function () { return core.cordova(this, "cameraUnbind", {}, arguments); };
    SDDBarcodeScanner.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SDDBarcodeScanner, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SDDBarcodeScanner.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SDDBarcodeScanner });
    SDDBarcodeScanner.pluginName = "SDDBarcodeScanner";
    SDDBarcodeScanner.plugin = "sdd-cordova-barcodescanner";
    SDDBarcodeScanner.pluginRef = "SDDBarcodeScanner";
    SDDBarcodeScanner.repo = "";
    SDDBarcodeScanner.install = "";
    SDDBarcodeScanner.installVariables = [];
    SDDBarcodeScanner.platforms = ["Android"];
    SDDBarcodeScanner = tslib.__decorate([], SDDBarcodeScanner);
    return SDDBarcodeScanner;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SDDBarcodeScanner, decorators: [{
            type: i0.Injectable
        }], propDecorators: { startCameraScan: [], isCameraReady: [], cameraUnbind: [] } });

exports.SDDBarcodeScanner = SDDBarcodeScanner;
