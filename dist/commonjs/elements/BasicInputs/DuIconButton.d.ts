import { TaskQueue } from 'aurelia-framework';
import { IButtonProps } from '@fluentui/react/lib/Button';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuIconButton extends AuReactWrapper implements IButtonProps {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    attached(): void;
}
