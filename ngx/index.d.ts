import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name S D D Barcode Scanner
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { SDDBarcodeScanner } from '@awesome-cordova-plugins/sdd-barcode-scanner';
 *
 *
 * constructor(private sDDBarcodeScanner: SDDBarcodeScanner) { }
 *
 * ...
 *
 *
 * this.sDDBarcodeScanner.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class SDDBarcodeScanner extends AwesomeCordovaNativePlugin {
    startCameraScan(): Promise<any>;
    isCameraReady(): Promise<string>;
    cameraUnbind(): Promise<string>;
}
