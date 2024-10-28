import { LitElement } from 'lit';
export declare class CastorBtn extends LitElement {
    static styles: import("lit").CSSResult;
    iconPosition: 'left' | 'right';
    type: 'button' | 'submit' | 'reset';
    disabled: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'castor-btn': CastorBtn;
    }
}
