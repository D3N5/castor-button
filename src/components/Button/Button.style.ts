import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
    cursor: pointer;
    box-sizing: border-box;
  }
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-2xs);
    border: 2px solid var(--colors-button-primary-stroke);
    background-color: var(--colors-button-primary-background);
    color: var(--colors-button-primary-text);
    font-family: inherit;
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-medium);
    line-height: 1.2;
    border-radius: var(--radius-full);
    padding: var(--spacing-md) var(--spacing-3xl);
    cursor: inherit;
    user-select: none;
  }
  button:hover {
    border-color: var(--colors-button-primary-hover-stroke);
    background-color: var(--colors-button-primary-hover-background);
  }
  button:active {
    border-color: var(--colors-button-primary-active-stroke);
    background-color: var(--colors-button-primary-active-background);
  }
  button:focus-visible {
    outline: 2px solid var(--colors-functional-active);
    outline-offset: 2px;
  }
  button:disabled {
    background-color: var(--colors-disabled-background);
    border-color: var(--colors-disabled-stroke);
    color: var(--colors-disabled-text);
    cursor: auto;
  }
  button.reverse-order {
    flex-direction: row-reverse;
  }
`;
