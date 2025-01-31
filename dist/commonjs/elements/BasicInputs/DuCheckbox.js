"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuCheckbox = void 0;
var aurelia_framework_1 = require("aurelia-framework");
var Checkbox_1 = require("@fluentui/react/lib/Checkbox");
var au_react_wrapper_1 = require("@dunite/au-react-wrapper");
var reactprops = {};
reactprops.disabled = {};
reactprops.ariaLabel = {};
reactprops.ariaLabelledBy = {};
reactprops.ariaPositionInSet = {};
reactprops.ariaSetSize = {};
reactprops.checkmarkIconProps = {};
reactprops.defaultChecked = {};
reactprops.disabled = {};
reactprops.className = {};
reactprops.label = {};
reactprops.onChange = au_react_wrapper_1.onlyAureliaBound;
reactprops.boxSide = {};
reactprops.checked = {};
var DuCheckbox = (function (_super) {
    __extends(DuCheckbox, _super);
    function DuCheckbox(element, tq) {
        var _this = _super.call(this, element, tq) || this;
        _this.tq = tq;
        _this.checked = false;
        _this.hidden = false;
        return _this;
    }
    DuCheckbox.prototype.attached = function () {
        this.renderReact(Checkbox_1.Checkbox, this.createState(reactprops));
    };
    DuCheckbox = __decorate([
        aurelia_framework_1.inject(Element, aurelia_framework_1.TaskQueue),
        aurelia_framework_1.customElement('du-checkbox'),
        __metadata("design:paramtypes", [Object, aurelia_framework_1.TaskQueue])
    ], DuCheckbox);
    return DuCheckbox;
}(au_react_wrapper_1.AuReactWrapper));
exports.DuCheckbox = DuCheckbox;
au_react_wrapper_1.addPropertiesState(DuCheckbox, reactprops);

//# sourceMappingURL=DuCheckbox.js.map
