import { TaskQueue, noView, customElement, inject } from 'aurelia-framework';
import { TextField, ITextFieldProps } from '@fluentui/react/lib/TextField';
//import { addPropertiesState } from '../../austate/addPropertiesState';
import { addPropertiesState, AuReactWrapperNoChildren, onlyAureliaBound } from '@dunite/au-react-wrapper';
let reactprops: ITextFieldProps = {} as ITextFieldProps;


reactprops.ariaLabel = <any>{};
reactprops.autoAdjustHeight = <any>{};
reactprops.autoComplete = <any>{};
reactprops.borderless = <any>{};
reactprops.className = <any>{};
reactprops.defaultValue = <any>{};
reactprops.deferredValidationTime = <any>{};
reactprops.description = <any>{};
reactprops.disabled = <any>{};
reactprops.errorMessage = <any>{};
reactprops.iconProps = <any>{};
reactprops.inputClassName = <any>{};
reactprops.label = <any>{};
reactprops.multiline = <any>{};
//reactprops.onChange = <any>onlyAureliaBound;
reactprops.onChange = <any>((that: any, event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    //console.log("DuTextField2: [renderReact] onChange Entering")

    // line below is necessery to update the viewmodel
    that.ignoreReactUpdate = true;
    that.value = newValue;

    // line below is necessery to update the React viewmodel
    that.reactComponent.setState({ "value": newValue || '' });
    //console.log("DuTextField2: [renderReact] onChange Leaving")


});
reactprops.onNotifyValidationResult = onlyAureliaBound;
reactprops.onGetErrorMessage = <any>onlyAureliaBound;
reactprops.prefix = <any>{};
reactprops.suffix = <any>{};
reactprops.readOnly = <any>{};
reactprops.resizable = <any>{};
reactprops.underlined = <any>{};
reactprops.validateOnFocusIn = <any>{};
reactprops.validateOnFocusOut = <any>{};
reactprops.validateOnLoad = <any>{};
reactprops.value = <any>{};
// HTML attributes
reactprops.required = <any>{};
reactprops.placeholder = <any>{};


@customElement('du-text-field2')
@noView()
@inject(Element, TaskQueue)
export class DuTextField2 extends AuReactWrapperNoChildren {

    orignalProp = reactprops;
    reactClass: any = TextField;

    // renderReact()
    // {
    //   console.log("DuTextField2: renderReact");
    //   var a = this.createState(this.orignalProp)
    //   a.aureliaHost = this;
    //   a.reactClass = this.reactClass;

    //   let reactElement = React.createElement(T2, a, null);
    //   this.reactComponent = ReactDom.render(reactElement, this.element);
    // }

    // public bind(bindingContext)
    // {
    //   console.log('bind AuReactStateWrapperNoChildren2');
    //   if ( bindingContext !== null)
    //   {
    //       this.parent = bindingContext;
    //   }
    // }

    // createState(reactprops: any): any
    // {
    //   console.log("createState AuReactStateWrapperNoChildren2");
    //   var reactpropNames = Object.getOwnPropertyNames(reactprops);

    //   var a = {};
    //   for (let i = 0; i < reactpropNames.length; i++) {
    //     let renderPropName = reactpropNames[i];
    //     if (typeof reactprops[renderPropName] === 'function')
    //       {
    //         console.log(`React template: typeof reactprops[${renderPropName}] is function`);
    //         console.log(`Aurelia object: typeof this[${renderPropName}] is ${typeof this[renderPropName] }`);

    //         if (typeof this[renderPropName] === 'function')
    //       {
    //         console.log('bound function, go aurelia');
    //         a[renderPropName] = this[renderPropName].bind(this.parent);
    //       }
    //       else
    //       {

    //         console.log('function is not bound, check for default implementation on React template');

    //         let funcNames = ['defaultOnChangeEvent', 'defaultActionEvent', 'onlyAureliaBound'];
    //         if ( ! funcNames.includes( reactprops[renderPropName].name) )
    //         {
    //           console.log('React template has default implementation, call it.');
    //           var that = this;
    //           a[renderPropName] = function()
    //           {
    //             let argLength = arguments.length;
    //             reactprops[renderPropName](that,
    //               argLength >= 1 ? arguments[0] : undefined,
    //               argLength >= 2 ? arguments[1] : undefined,
    //               argLength >= 3 ? arguments[2] : undefined,
    //               argLength >= 4 ? arguments[3] : undefined
    //               );
    //           };
    //         }
    //         else
    //         {
    //           console.log('React template has empty implementation, do nothing.');
    //         }
    //       }

    //      } else
    //      {
    //       console.log(`React template: typeof reactprops[${renderPropName}] is NOT function`);

    //       if (typeof this[renderPropName] !== 'undefined')
    //       {
    //         console.log('Aurelia object property ' + renderPropName + ' has value ' +  this[renderPropName]);
    //         a[renderPropName] = this[renderPropName];
    //       }
    //       else
    //       {
    //         console.log('Aurelia object property ' + renderPropName + ' has NO value ' );
    //       }
    //     }
    //     }
    //     return a;
    // }
    // propertyChanged(name, newValue, oldValue)
    // {

    //   console.log("DuTextField2: propertyChanged");
    //   // console.log(name);
    //   // console.log(newValue);
    //   // console.log(oldValue);

    //   if (!this.ignoreReactUpdate)
    //   {
    //     //console.log("update came from aurelia");
    //     var obj = {};
    //     obj[name] = newValue;
    //     // line below is necessery
    //     this.reactComponent.setState( obj);
    //   }
    //   this.tq.queueMicroTask(() =>
    //   {
    //     this.ignoreReactUpdate = false;
    //   });
    //   console.log("DuTextField2: propertyChanged Leaving");
    // }

}

addPropertiesState(DuTextField2, reactprops);



