import { NgModule } from '@angular/core';
import { BoxComponent } from './box/box.component';
var I18nTestModule = (function () {
    function I18nTestModule() {
    }
    return I18nTestModule;
}());
export { I18nTestModule };
I18nTestModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [BoxComponent],
                exports: [BoxComponent]
            },] },
];
/** @nocollapse */
I18nTestModule.ctorParameters = function () { return []; };
