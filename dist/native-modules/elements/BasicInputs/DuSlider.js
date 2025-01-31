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
import { customElement, TaskQueue, inject } from 'aurelia-framework';
import { Slider } from '@fluentui/react/lib/Slider';
import { AuReactWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.value = {};
reactprops.ariaLabel = {};
reactprops.ariaValueText = onlyAureliaBound;
reactprops.className = {};
reactprops.defaultValue = {};
reactprops.disabled = {};
reactprops.label = {};
reactprops.max = {};
reactprops.min = {};
reactprops.onChange = onlyAureliaBound;
reactprops.onChanged = onlyAureliaBound;
reactprops.showValue = {};
reactprops.step = {};
reactprops.value = {};
reactprops.vertical = {};
reactprops.valueFormat = onlyAureliaBound;
reactprops.vertical = {};
var DuSlider = (function (_super) {
    __extends(DuSlider, _super);
    function DuSlider(element, tq) {
        var _this = _super.call(this, element, tq) || this;
        _this.tq = tq;
        _this.hidden = false;
        return _this;
    }
    DuSlider.prototype.attached = function () {
        this.renderReact(Slider, this.createState(reactprops));
    };
    DuSlider = __decorate([
        inject(Element, TaskQueue),
        customElement('du-slider'),
        __metadata("design:paramtypes", [Object, TaskQueue])
    ], DuSlider);
    return DuSlider;
}(AuReactWrapper));
export { DuSlider };
addPropertiesState(DuSlider, reactprops);

//# sourceMappingURL=DuSlider.js.map
