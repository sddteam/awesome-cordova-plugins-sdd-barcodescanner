var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var SDDBarcodeScannerOriginal = /** @class */ (function (_super) {
    __extends(SDDBarcodeScannerOriginal, _super);
    function SDDBarcodeScannerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SDDBarcodeScannerOriginal.prototype.startCameraScan = function () { return cordova(this, "startCameraScan", {}, arguments); };
    SDDBarcodeScannerOriginal.prototype.isCameraReady = function () { return cordova(this, "isCameraReady", {}, arguments); };
    SDDBarcodeScannerOriginal.prototype.cameraUnbind = function () { return cordova(this, "cameraUnbind", {}, arguments); };
    SDDBarcodeScannerOriginal.pluginName = "SDDBarcodeScanner";
    SDDBarcodeScannerOriginal.plugin = "sdd-cordova-barcodescanner";
    SDDBarcodeScannerOriginal.pluginRef = "SDDBarcodeScanner";
    SDDBarcodeScannerOriginal.repo = "";
    SDDBarcodeScannerOriginal.install = "";
    SDDBarcodeScannerOriginal.installVariables = [];
    SDDBarcodeScannerOriginal.platforms = ["Android"];
    return SDDBarcodeScannerOriginal;
}(AwesomeCordovaNativePlugin));
var SDDBarcodeScanner = new SDDBarcodeScannerOriginal();
export { SDDBarcodeScanner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2RkLWJhcmNvZGUtc2Nhbm5lci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLHVDQU9OLE1BQU0sK0JBQStCLENBQUM7O0lBa0NBLHFDQUEwQjs7OztJQUUvRCwyQ0FBZTtJQUtmLHlDQUFhO0lBS2Isd0NBQVk7Ozs7Ozs7OzRCQWpFZDtFQXFEdUMsMEJBQTBCO1NBQXBELGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcclxuICpcclxuICogVE9ETzpcclxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XHJcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcclxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xyXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxyXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcclxuICpcclxuICovXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBQbHVnaW4sXHJcbiAgQ29yZG92YSxcclxuICBDb3Jkb3ZhUHJvcGVydHksXHJcbiAgQ29yZG92YUluc3RhbmNlLFxyXG4gIEluc3RhbmNlUHJvcGVydHksXHJcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXHJcbn0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQG5hbWUgUyBEIEQgQmFyY29kZSBTY2FubmVyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBTRERCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zZGQtYmFyY29kZS1zY2FubmVyJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzRERCYXJjb2RlU2Nhbm5lcjogU0REQmFyY29kZVNjYW5uZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5zRERCYXJjb2RlU2Nhbm5lci5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU0REQmFyY29kZVNjYW5uZXInLFxyXG4gIHBsdWdpbjogJ3NkZC1jb3Jkb3ZhLWJhcmNvZGVzY2FubmVyJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnU0REQmFyY29kZVNjYW5uZXInLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cclxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNEREJhcmNvZGVTY2FubmVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydENhbWVyYVNjYW4oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgaXNDYW1lcmFSZWFkeSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBjYW1lcmFVbmJpbmQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXHJcbiAgfVxyXG59XHJcbiJdfQ==