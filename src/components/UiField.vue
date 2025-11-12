<script setup lang="ts">
export interface IProps {
  label: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="ui-field">
    <label class="ui-field__label">{{ props.label }}</label>
    <div class="ui-field__control">
      <slot />
    </div>
  </div>
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

