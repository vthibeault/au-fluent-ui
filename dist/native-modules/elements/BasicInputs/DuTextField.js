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
import { TaskQueue, customElement, inject } from 'aurelia-framework';
import { TextField } from '@fluentui/react/lib/TextField';
import { AuReactWrapperNoChildren, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.ariaLabel = {};
reactprops.autoAdjustHeight = {};
reactprops.autoComplete = {};
reactprops.borderless = {};
reactprops.className = {};
reactprops.defaultValue = {};
reactprops.deferredValidationTime = {};
reactprops.description = {};
reactprops.disabled = {};
reactprops.errorMessage = {};
reactprops.iconProps = {};
reactprops.inputClassName = {};
reactprops.label = {};
reactprops.multiline = {};
reactprops.onChange = (function (that, event, newValue) {
    that.ignoreReactUpdate = true;
    that.value = newValue;
    that.reactComponent.setState({ "value": newValue || '' });
});
reactprops.onNotifyValidationResult = onlyAureliaBound;
reactprops.onGetErrorMessage = onlyAureliaBound;
reactprops.prefix = {};
reactprops.suffix = {};
reactprops.readOnly = {};
reactprops.resizable = {};
reactprops.underlined = {};
reactprops.validateOnFocusIn = {};
reactprops.validateOnFocusOut = {};
reactprops.validateOnLoad = {};
reactprops.value = {};
reactprops.required = {};
reactprops.placeholder = {};
var DuTextField = (function (_super) {
    __extends(DuTextField, _super);
    function DuTextField(element, tq) {
        var _this = _super.call(this, element, tq) || this;
        _this.tq = tq;
        _this.orignalProp = reactprops;
        _this.reactClass = TextField;
        _this.hidden = false;
        return _this;
    }
    DuTextField.prototype.attached = function () {
        this.renderReact(TextField, this.createState(reactprops));
        if (this.autoAdjustHeight == true) {
            var elements = this.element.getElementsByTagName('textarea');
            if (elements.length > 0) {
                var element = elements.item(0);
                element.setAttribute('style', '');
            }
        }
    };
    DuTextField.prototype.blur = function () {
        this.reactComponent.blur();
    };
    DuTextField.prototype.focus = function () {
        this.reactComponent.focus();
    };
    DuTextField.prototype.select = function () {
        this.reactComponent.select();
    };
    DuTextField.prototype.selectionEnd = function () {
        return this.reactComponent.selectionEnd();
    };
    DuTextField.prototype.selectionStart = function () {
        return this.reactComponent.selectionStart();
    };
    DuTextField.prototype.setSelectionEnd = function (value) {
        this.reactComponent.setSelectionEnd(value);
    };
    DuTextField.prototype.setSelectionRange = function (start, end) {
        this.reactComponent.setSelectionRange(start, end);
    };
    DuTextField.prototype.setSelectionStart = function (value) {
        this.reactComponent.setSelectionStart(value);
    };
    DuTextField = __decorate([
        inject(Element, TaskQueue),
        customElement('du-text-field'),
        __metadata("design:paramtypes", [Object, TaskQueue])
    ], DuTextField);
    return DuTextField;
}(AuReactWrapperNoChildren));
export { DuTextField };
addPropertiesState(DuTextField, reactprops);

//# sourceMappingURL=DuTextField.js.map
