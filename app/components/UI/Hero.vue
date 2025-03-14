<script setup lang="ts">
import type { Player } from '~/types'

const players: Player[] = [{
  id: 1,
  name: 'Julien',
  setsWon: 34,
  setsLost: 12,
}, {
  id: 2,
  name: 'Claude',
  setsWon: 10,
  setsLost: 24,
}, {
  id: 3,
  name: 'Nicolas',
  setsWon: 40,
  setsLost: 2,
}, {
  id: 4,
  name: 'David',
  setsWon: 20,
  setsLost: 18,
}, {
  id: 5,
  name: 'Mathieu',
  setsWon: 15,
  setsLost: 17,
}]
</script>

<template>
  <section class="relative isolate">
    <UContainer class="flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16">
      <div class="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-px ">
        <UICard
          v-for="player in players"
          :key="player.id"
          :name="player.name"
          :wons="player.setsWon"
          :losts="player.setsLost"
          class="relative group flex rounded-[calc(var(--ui-radius)*2)] bg-(--ui-bg-elevated)/50 ring ring-(--ui-border) lg:rounded-none first:rounded-l-[calc(var(--ui-radius)*2)] last:rounded-r-[calc(var(--ui-radius)*2)] hover:z-1"
        />
      </div>
    </UContainer>
  </section>
</template>
