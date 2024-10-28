// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../index.ts';
import { icon } from './icon.ts';

export default {
  title: 'Components/Button',
  component: 'castor-btn',
  parameters: {
    docs: {
      description: {
        component:
          'Standard button.<br/> In addition to the label, an Icon can be displayed by adding the slot="icon" attribute to the Icon element.',
      },
    },
  },
  argTypes: {
    iconPosition: {
      name: 'iconPosition',
      type: { name: 'string', required: false },
      description: 'Position of the icon.',
      control: 'select',
      options: ['left', 'right'],
      table: {
        type: {
          summary: 'left | right',
        },
        defaultValue: { summary: 'left' },
      },
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      description: 'Disable the button.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
    type: {
      name: 'type',
      type: { name: 'string', required: false },
      description: 'Defines the default behavior of the button ',
      control: 'select',
      options: ['button', 'submit', 'reset'],
      table: {
        type: {
          summary: 'button | submit | reset',
        },
        defaultValue: { summary: 'button' },
      },
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: { type: 'button' },
  render: ({ type }) => html`<castor-btn type=${type}>label</castor-btn>`,
};

export const RightIcon: StoryObj = {
  args: { ...Default.args, iconPosition: 'right' },
  render: ({ iconPosition }) =>
    html` <castor-btn iconPosition=${iconPosition}>
      ${icon()} label
    </castor-btn>`,
};

export const LeftIcon: StoryObj = {
  args: { ...Default.args, iconPosition: 'left' },
  render: ({ iconPosition }) =>
    html` <castor-btn iconPosition=${iconPosition}>
      ${icon()} label
    </castor-btn>`,
};

export const Disabled: StoryObj = {
  args: { ...Default.args, disabled: true },
  render: ({ disabled }) =>
    html` <castor-btn ?disabled=${disabled}>label</castor-btn>`,
};
