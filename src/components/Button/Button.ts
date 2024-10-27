import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './Button.style.ts';

@customElement('castor-btn')
export class CastorBtn extends LitElement {
  static styles = styles;

  @property()
  iconPosition: 'left' | 'right' = 'left';

  @property()
  type: 'button' | 'submit' | 'reset' = 'button';

  @property({ type: Boolean })
  disabled = false;

  render() {
    return html`
      <button
        aria-disabled=${this.disabled ? 'true' : 'false'}
        class=${ifDefined(
          this.iconPosition === 'right' ? 'reverse-order' : undefined
        )}
        ?disabled=${this.disabled}
        type=${this.type}
      >
        <slot name="icon"></slot>
        <div>
          <slot></slot>
        </div>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'castor-btn': CastorBtn;
  }
}
