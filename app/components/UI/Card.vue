<script setup lang="ts">
import { calculateWinRate } from '~/utils'

const props = defineProps<{
  name: string
  wons: number
  losts: number
}>()
</script>

<template>
  <div>
    <div
      class="relative flex flex-col flex-1 lg:grid gap-x-8 p-4 sm:p-6 gap-y-1.5 place-items-center"
    >
      <slot name="name">
        <div class="text-pretty font-normal text-(--ui-text-muted) text-xs uppercase">
          {{ props.name }}
        </div>
      </slot>
      <div class="flex items-center gap-2">
        <span class="text-2xl font-semibold text-(--ui-text-highlighted)">
          {{ props.wons }} - {{ props.losts }}
        </span>

        <UBadge
          :color="props.wons > props.losts ? 'success' : 'error'"
          variant="subtle"
          class="text-xs"
        >
          {{ calculateWinRate(props.wons, props.losts) }}%
        </UBadge>
      </div>
    </div>
  </div>
</template>
