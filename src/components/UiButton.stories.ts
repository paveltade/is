import UiButton from './UiButton.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof UiButton> = {
  title: 'UI/UiButton',
  component: UiButton,
};

export default meta;

type Story = StoryObj<typeof UiButton>;

export const Primary: Story = {
  args: {
    layout: 'primary',
    isDisabled: false,
    type: 'button',
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: `<UiButton v-bind="args">Кнопка</UiButton>`,
  }),
};