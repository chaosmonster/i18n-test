import { Component } from '@angular/core';
var BoxComponent = (function () {
    function BoxComponent() {
    }
    BoxComponent.prototype.ngOnInit = function () {
    };
    return BoxComponent;
}());
export { BoxComponent };
BoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-box',
                template: "\n    <h1 i18n>Translate this </h1>\n    "
            },] },
];
/** @nocollapse */
BoxComponent.ctorParameters = function () { return []; };
