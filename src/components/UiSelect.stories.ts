import UiSelect from './UiSelect.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

const meta: Meta<typeof UiSelect> = {
  title: 'UI/UiSelect',
  component: UiSelect,
  argTypes: {
    isDisabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof UiSelect>;

export const Default: Story = {
  args: {
    isDisabled: false,
    options: ['Vue', 'React', 'Angular', 'Svelte'],
  },
  render: (args) => ({
    components: { UiSelect },
    setup() {
      const value = ref('');
      return { args, value };
    },
    template: `
      <UiSelect
        v-bind="args"
        v-model="value"
      />
      <p style="margin-top: 8px;">Selected: {{ value }}</p>
    `,
  }),
};
