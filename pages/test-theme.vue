<template>
  <div class="min-h-screen text-invert p-4">
    <div class="mx-auto">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-bold text-brand">Тестирование тем</h1>
        <UIThemeToggle />
      </div>

      <div class="mb-8">
        <h2 class="text-lg mb-4">Кнопки:</h2>
        <div class="flex gap-4 flex-wrap">
          <UIBaseButton type="primary" disabled size="small">Primary Small</UIBaseButton>
          <UIBaseButton type="primary" size="medium">Primary Medium</UIBaseButton>
          <UIBaseButton type="primary" size="large">Primary Large</UIBaseButton>
          <UIBaseButton type="secondary" disabled size="small">Secondary Small</UIBaseButton>
          <UIBaseButton type="secondary" size="medium">Secondary Medium</UIBaseButton>
          <UIBaseButton type="secondary" size="large">Secondary Large</UIBaseButton>
        </div>
        <div class="mt-7.2 flex gap-4 flex-wrap items-center">
          <UITextButton type="primary" size="small">Primary Small</UITextButton>
          <UITextButton type="primary" size="medium">Primary Medium</UITextButton>
          <UITextButton type="primary" size="large">Primary Large</UITextButton>
          <UITextButton type="secondary" size="small">Secondary Small</UITextButton>
          <UITextButton type="secondary" size="medium">Secondary Medium</UITextButton>
          <UITextButton type="secondary" size="large">Secondary Large</UITextButton>
        </div>
      </div>

      <h2>Анимации</h2>
      <div ref="lottieContainer" :style="containerStyle" />

      <UICheckbox v-model="checked2" label="Принять условия соглашения" />

      <UIGrid :columns="3" gap="md" class="p-6">
        <UICard
            v-for="i in 10"
            :key="i"/>
      </UIGrid>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import lottie from 'lottie-web';

const lottieContainer = ref<HTMLElement>();
const animation = ref<any>();

const containerStyle = {
  width: '157px',
  height: '126px',
  display: 'inline-block'
};

onMounted(async () => {
  if (lottieContainer.value) {
    const animationData = await $fetch('/images/cube2.json');

    animation.value = lottie.loadAnimation({
      container: lottieContainer.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }
});

onUnmounted(() => {
  if (animation.value) {
    animation.value.destroy();
  }
});
const checked2 = ref(false)

</script>
