<script setup lang="ts">
</script>

<template>
  <header class="bg-(--ui-bg)/75 backdrop-blur border-b border-(--ui-border) h-(--ui-header-height) sticky top-0 z-50">
    <UContainer class="flex items-center justify-between gap-3 h-full">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <slot name="left" />
      </div>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <slot name="right" />
      </div>
    </UContainer>
  </header>
</template>
