import UiInput from './UiInput.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

const meta: Meta<typeof UiInput> = {
  title: 'UI/UiInput',
  component: UiInput,
  argTypes: {
    placeholder: { control: 'text' },
    isDisabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof UiInput>;

export const Default: Story = {
  args: {
    placeholder: 'Введите текст...',
    isDisabled: false,
  },
  render: (args) => ({
    components: { UiInput },
    setup() {
      const value = ref('Пример');
      return { args, value };
    },
    template: `
      <UiInput
        v-bind="args"
        v-model="value"
      />
      <p style="margin-top: 8px;">Value: {{ value }}</p>
    `,
  }),
};
