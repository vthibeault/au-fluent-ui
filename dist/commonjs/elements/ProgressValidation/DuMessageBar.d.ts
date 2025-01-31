import { TaskQueue } from 'aurelia-framework';
import { AuReactWrapper } from '@dunite/au-react-wrapper';
export declare class DuMessageBar extends AuReactWrapper {
    protected tq: TaskQueue;
    constructor(element: any, tq: TaskQueue);
    hidden: boolean;
    attached(): void;
}
