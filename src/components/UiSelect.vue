<script setup lang="ts">
export interface IProps {
  modelValue: string;
  isDisabled?: boolean;
  options: string[];
}

export interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  isDisabled: false,
  options: () => [],
});

const emit = defineEmits<IEmit>();
</script>

<template>
  <select
    class="ui-select"
    :value="props.modelValue"
    :disabled="props.isDisabled"
    @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option v-for="opt in props.options" :key="opt" :value="opt">
      {{ opt }}
    </option>
  </select>
</template>

<style module lang="scss">
.button {
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 16px 32px;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-white);
  background: var(--color-primary);
  border-radius: 16px;

  &[data-layout='secondary'] {
    color: var(--color-primary);
    background-color: var(--color-transparent);
    border-color: var(--color-primary);
  }
}
</style>
