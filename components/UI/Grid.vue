<template>
  <div
      :class="gridClasses"
      data-testid="grid-container"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface GridProps {
  columns: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const props = withDefaults(defineProps<GridProps>(), {
  gap: 'md',
  className: '',
});

const gridClasses = computed(() => {
  const baseClasses = 'grid';

  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[props.columns];

  const gapClasses = {
    sm: 'gap-3',
    md: 'gap-4 md:gap-6',
    lg: 'gap-6 md:gap-8',
    xl: 'gap-8 md:gap-10',
  }[props.gap];

  return [baseClasses, columnClasses, gapClasses, props.className].filter(Boolean).join(' ');
});
</script>

<style scoped>
.grid > * {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
