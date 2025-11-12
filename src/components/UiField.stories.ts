import UiField from './UiField.vue';
import UiInput from './UiInput.vue';
import UiSelect from './UiSelect.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

const meta: Meta<typeof UiField> = {
  title: 'UI/UiField',
  component: UiField,
};

export default meta;
type Story = StoryObj<typeof UiField>;

export const WithInput: Story = {
  render: () => ({
    components: { UiField, UiInput },
    setup() {
      const value = ref('');
      return { value };
    },
    template: `
      <UiField label="Имя">
        <UiInput v-model="value" placeholder="Введите имя" />
      </UiField>
      <p style="margin-top: 8px;">Value: {{ value }}</p>
    `,
  }),
};

export const WithSelect: Story = {
  render: () => ({
    components: { UiField, UiSelect },
    setup() {
      const value = ref('');
      const options = ['Vue', 'React', 'Svelte'];
      return { value, options };
    },
    template: `
      <UiField label="Фреймворк">
        <UiSelect v-model="value" :options="options" />
      </UiField>
      <p style="margin-top: 8px;">Selected: {{ value }}</p>
    `,
  }),
};
