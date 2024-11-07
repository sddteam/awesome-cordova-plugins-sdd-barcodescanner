import { __decorate, __extends } from "tslib";
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var SDDBarcodeScanner = /** @class */ (function (_super) {
    __extends(SDDBarcodeScanner, _super);
    function SDDBarcodeScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SDDBarcodeScanner.prototype.startCameraScan = function () { return cordova(this, "startCameraScan", {}, arguments); };
    SDDBarcodeScanner.prototype.isCameraReady = function () { return cordova(this, "isCameraReady", {}, arguments); };
    SDDBarcodeScanner.prototype.cameraUnbind = function () { return cordova(this, "cameraUnbind", {}, arguments); };
    SDDBarcodeScanner.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SDDBarcodeScanner, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    SDDBarcodeScanner.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SDDBarcodeScanner });
    SDDBarcodeScanner.pluginName = "SDDBarcodeScanner";
    SDDBarcodeScanner.plugin = "sdd-cordova-barcodescanner";
    SDDBarcodeScanner.pluginRef = "SDDBarcodeScanner";
    SDDBarcodeScanner.repo = "";
    SDDBarcodeScanner.install = "";
    SDDBarcodeScanner.installVariables = [];
    SDDBarcodeScanner.platforms = ["Android"];
    SDDBarcodeScanner = __decorate([], SDDBarcodeScanner);
    return SDDBarcodeScanner;
}(AwesomeCordovaNativePlugin));
export { SDDBarcodeScanner };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SDDBarcodeScanner, decorators: [{
            type: Injectable
        }], propDecorators: { startCameraScan: [], isCameraReady: [], cameraUnbind: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2RkLWJhcmNvZGUtc2Nhbm5lci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBT04sTUFBTSwrQkFBK0IsQ0FBQzs7O0lBa0NBLHFDQUEwQjs7OztJQUUvRCwyQ0FBZTtJQUtmLHlDQUFhO0lBS2Isd0NBQVk7bUhBWkQsaUJBQWlCO3VIQUFqQixpQkFBaUI7Ozs7Ozs7O0lBQWpCLGlCQUFpQixrQkFBakIsaUJBQWlCOzRCQXJEOUI7RUFxRHVDLDBCQUEwQjtTQUFwRCxpQkFBaUI7NEZBQWpCLGlCQUFpQjtrQkFEN0IsVUFBVTs4QkFHVCxlQUFlLE1BS2YsYUFBYSxNQUtiLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXHJcbiAqXHJcbiAqIFRPRE86XHJcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xyXG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXHJcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcclxuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcclxuICogLSBSZW1vdmUgdGhpcyBub3RlXHJcbiAqXHJcbiAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgUGx1Z2luLFxyXG4gIENvcmRvdmEsXHJcbiAgQ29yZG92YVByb3BlcnR5LFxyXG4gIENvcmRvdmFJbnN0YW5jZSxcclxuICBJbnN0YW5jZVByb3BlcnR5LFxyXG4gIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLFxyXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFMgRCBEIEJhcmNvZGUgU2Nhbm5lclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgU0REQmFyY29kZVNjYW5uZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc2RkLWJhcmNvZGUtc2Nhbm5lcic7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc0REQmFyY29kZVNjYW5uZXI6IFNEREJhcmNvZGVTY2FubmVyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuc0REQmFyY29kZVNjYW5uZXIuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NEREJhcmNvZGVTY2FubmVyJyxcclxuICBwbHVnaW46ICdzZGQtY29yZG92YS1iYXJjb2Rlc2Nhbm5lcicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ1NEREJhcmNvZGVTY2FubmVyJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHJlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTRERCYXJjb2RlU2Nhbm5lciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSgpXHJcbiAgc3RhcnRDYW1lcmFTY2FuKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzQ2FtZXJhUmVhZHkoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgY2FtZXJhVW5iaW5kKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xyXG4gIH1cclxufVxyXG4iXX0=